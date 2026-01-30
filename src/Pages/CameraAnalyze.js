import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function CameraAnalyze() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [status, setStatus] = useState("Loading AI Model...");
  const [imageCaptured, setImageCaptured] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const reportRef = useRef(null);

  // Load model
  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.ready();
        const model = await faceLandmarksDetection.createDetector(
          faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
          { runtime: "tfjs" }
        );
        setDetector(model);
        setStatus("Model Ready ✅");
      } catch (err) {
        console.error("Model loading failed:", err);
        setStatus("❌ Failed to load model");
      }
    };
    loadModel();
  }, []);

  // Face detection
  useEffect(() => {
    if (!detector) return;
    const interval = setInterval(() => detectFace(), 300);
    return () => clearInterval(interval);
  }, [detector]);

  const detectFace = async () => {
    if (!detector || !webcamRef.current || !canvasRef.current) return;

    const video = webcamRef.current.video;
    if (!video || video.readyState !== 4) return;

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const faces = await detector.estimateFaces(video);
    faces.forEach((face) => {
      const box = face.box;
      ctx.strokeStyle = "#00FF00";
      ctx.lineWidth = 3;
      ctx.strokeRect(box.xMin, box.yMin, box.width, box.height);
    });
  };

  // Analyze captured image
  const analyzeImage = async (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    await new Promise((res) => (img.onload = res));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const pixels = imageData.data;

    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i];
      g += pixels[i + 1];
      b += pixels[i + 2];
      count++;
    }

    const avgR = r / count;
    const avgG = g / count;
    const avgB = b / count;
    const brightness = (avgR + avgG + avgB) / 3;

    let skinType = "";
    let glowScore = 0;
    let suggestion = "";
    let products = [];

    if (brightness > 180) {
      skinType = "Dry Skin";
      glowScore = 90;
      suggestion =
        "💧 Your skin appears bright — use a hydrating moisturizer and SPF 30+ daily.";
      products = [
        {
          name: "Hydrating Cream",
          link: "https://www.nykaa.com/the-ordinary-natural-moisturizing-factors-ha/p/123456",
          price: "₹699",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965873.png",
        },
        {
          name: "Vitamin E Serum",
          link: "https://www.amazon.in/Vitamin-E-Serum",
          price: "₹899",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965901.png",
        },
      ];
    } else if (brightness > 120) {
      skinType = "Normal / Combination";
      glowScore = 80;
      suggestion =
        "🌸 Balanced skin tone — keep using gentle cleansers and hydrate well!";
      products = [
        {
          name: "Aloe Gel Moisturizer",
          link: "https://www.amazon.in/Aloe-Vera-Gel",
          price: "₹499",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965873.png",
        },
        {
          name: "Daily SPF Lotion",
          link: "https://www.nykaa.com/sunscreen",
          price: "₹599",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965901.png",
        },
      ];
    } else if (brightness > 80) {
      skinType = "Oily Skin";
      glowScore = 70;
      suggestion =
        "✨ Slight oiliness detected — try oil-free face wash and light moisturizer.";
      products = [
        {
          name: "Oil-Free Gel Moisturizer",
          link: "https://www.amazon.in/oil-free-gel-moisturizer",
          price: "₹499",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965858.png",
        },
        {
          name: "Oil Control Face Wash",
          link: "https://www.nykaa.com/oil-control-facewash",
          price: "₹299",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965816.png",
        },
      ];
    } else {
      skinType = "Dull / Tired Skin";
      glowScore = 60;
      suggestion =
        "🌙 Your skin looks dry or tired. Use night repair serums and stay hydrated.";
      products = [
        {
          name: "Night Repair Serum",
          link: "https://www.amazon.in/night-serum",
          price: "₹1099",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965901.png",
        },
        {
          name: "Hydration Booster Cream",
          link: "https://www.nykaa.com/hydration-cream",
          price: "₹849",
          image: "https://cdn-icons-png.flaticon.com/512/2965/2965873.png",
        },
      ];
    }

    setAiResult({ skinType, glowScore, suggestion, products });
  };

  // Capture photo
  const capture = async () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
    setImageCaptured(true);
    await analyzeImage(image);
  };

  // Download PDF
  const downloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const position = 10;
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      pdf.save("GlowCare_Report.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-bold text-green-600 mb-2">📸 Smart Analyzer</h2>
      <p className="text-gray-700 mb-4">{status}</p>

      {!imageCaptured ? (
        <div className="relative">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="rounded-2xl shadow-lg border-4 border-green-300"
            videoConstraints={{ width: 480, height: 360, facingMode: "user" }}
          />
          <canvas ref={canvasRef} width={480} height={360} className="absolute top-0 left-0" />
          <div className="mt-4">
            <button
              onClick={capture}
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Capture & Analyze
            </button>
          </div>
        </div>
      ) : (
        <div ref={reportRef} className="max-w-md bg-white p-6 rounded-2xl shadow-lg text-left">
          <img src={imageSrc} alt="Captured" className="rounded-xl shadow mb-4 w-full" />
          <h3 className="text-2xl font-semibold text-green-600 mb-2">🌿 GlowCare AI Report</h3>
          <p><strong>Skin Type:</strong> {aiResult?.skinType}</p>
          <p><strong>Glow Score:</strong> {aiResult?.glowScore}/100</p>
          <p className="mt-2 text-gray-700">{aiResult?.suggestion}</p>

          {/* 🧴 Recommended Products */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-pink-600 mb-3">🧴 Recommended for You:</h4>
            <div className="grid grid-cols-1 gap-4">
              {aiResult?.products.map((p, i) => (
                <div key={i} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                  <img src={p.image} alt={p.name} className="w-16 mx-auto mb-2" />
                  <h5 className="font-bold text-gray-800">{p.name}</h5>
                  <p className="text-green-600 font-semibold">{p.price}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2 bg-pink-500 text-white py-1 rounded-lg hover:bg-pink-600"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => {
                setImageCaptured(false);
                setAiResult(null);
              }}
              className="bg-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-500 transition"
            >
              Retake
            </button>
            <button
              onClick={downloadPDF}
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Download Report
            </button>
          </div>
          <Link
  to="/feedback"
  className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
>
  Give Feedback ⭐
</Link>

  

        </div>
      )}
    </div>
  );
}

export default CameraAnalyze;
