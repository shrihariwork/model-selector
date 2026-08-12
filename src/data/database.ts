export type ComputeType = "CPU" | "NPU" | "GPU" | "MCU";

export type DeviceCategory =
  | "Micro-Edge & TinyML"
  | "General Purpose Edge & SBCs"
  | "High-Performance Edge Accelerators"
  | "AI PC / Client Edge"
  | "Custom";

export interface Device {
  id: string;
  brand: string;
  name: string;
  ramGB: number;
  npuTops: number;
  computeType: ComputeType[];
  supportedFormats: string[];
  category: DeviceCategory;
}

export const devices: Device[] = [
  // ──────────────────────────────────────────────────────
  // 1. Micro-Edge & TinyML
  // ──────────────────────────────────────────────────────
  {
    id: "luckfox-pico-mini-ab",
    brand: "Luckfox",
    name: "Pico Mini A / Mini B",
    ramGB: 0.064,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "luckfox-pico",
    brand: "Luckfox",
    name: "Pico / Pico Plus",
    ramGB: 0.064,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "luckfox-pico-pro",
    brand: "Luckfox",
    name: "Pico Pro / Ultra B",
    ramGB: 0.128,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "luckfox-pico-max",
    brand: "Luckfox",
    name: "Pico Max / Ultra",
    ramGB: 0.256,
    npuTops: 1.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN", "ONNX"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "seeed-xiao-esp32s3",
    brand: "Seeed Studio",
    name: "XIAO ESP32-S3 Sense",
    ramGB: 0.008,
    npuTops: 0.1,
    computeType: ["MCU"],
    supportedFormats: ["TFLite"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "arduino-nano-33",
    brand: "Arduino",
    name: "Nano 33 BLE Sense Rev2",
    ramGB: 0.000256,
    npuTops: 0,
    computeType: ["MCU"],
    supportedFormats: ["TFLite"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "openmv-ae3",
    brand: "OpenMV",
    name: "OpenMV AE3 (Ethos-U55)",
    ramGB: 0.008,
    npuTops: 0.5,
    computeType: ["MCU", "NPU"],
    supportedFormats: ["TFLite"],
    category: "Micro-Edge & TinyML",
  },
  {
    id: "openmv-n6",
    brand: "OpenMV",
    name: "OpenMV N6 (STM32N6)",
    ramGB: 0.032,
    npuTops: 1.0,
    computeType: ["MCU", "NPU"],
    supportedFormats: ["TFLite", "ONNX"],
    category: "Micro-Edge & TinyML",
  },

  // ──────────────────────────────────────────────────────
  // 2. General Purpose Edge & SBCs
  // ──────────────────────────────────────────────────────
  {
    id: "raspberry-pi-5-4gb",
    brand: "Raspberry Pi",
    name: "Pi 5 (4GB)",
    ramGB: 4.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["GGUF", "TFLite", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "raspberry-pi-5-8gb",
    brand: "Raspberry Pi",
    name: "Pi 5 (8GB)",
    ramGB: 8.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["GGUF", "TFLite", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "raspberry-pi-5-hailo8l",
    brand: "Raspberry Pi",
    name: "Pi 5 + Hailo-8L AI HAT+",
    ramGB: 8.0,
    npuTops: 13.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["ONNX", "TFLite"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "raspberry-pi-5-hailo10h",
    brand: "Raspberry Pi",
    name: "Pi 5 + Hailo-10H AI HAT+",
    ramGB: 8.0,
    npuTops: 40.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["ONNX", "TFLite", "GGUF"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "rockchip-rk3588",
    brand: "Rockchip",
    name: "RK3588 SBC (8GB)",
    ramGB: 8.0,
    npuTops: 6.0,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["RKNN", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "rockchip-rk3588-32gb",
    brand: "Rockchip",
    name: "RK3588 SBC (32GB)",
    ramGB: 32.0,
    npuTops: 6.0,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["RKNN", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "rockchip-rk3688",
    brand: "Rockchip",
    name: "RK3688 SBC (16GB)",
    ramGB: 16.0,
    npuTops: 10.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "google-coral-dev",
    brand: "Google",
    name: "Coral Dev Board",
    ramGB: 1.0,
    npuTops: 4.0,
    computeType: ["NPU"],
    supportedFormats: ["TFLite"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "mediatek-genio-700",
    brand: "MediaTek",
    name: "Genio 700 SoM",
    ramGB: 8.0,
    npuTops: 4.0,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["TFLite", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },
  {
    id: "mediatek-genio-1200",
    brand: "MediaTek",
    name: "Genio 1200 SoM",
    ramGB: 16.0,
    npuTops: 4.8,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["TFLite", "ONNX"],
    category: "General Purpose Edge & SBCs",
  },

  // ──────────────────────────────────────────────────────
  // 3. High-Performance Edge Accelerators
  // ──────────────────────────────────────────────────────
  {
    id: "jetson-orin-nano",
    brand: "NVIDIA",
    name: "Jetson Orin Nano (8GB)",
    ramGB: 8.0,
    npuTops: 40,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "jetson-orin-nx",
    brand: "NVIDIA",
    name: "Jetson Orin NX (16GB)",
    ramGB: 16.0,
    npuTops: 100,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "jetson-agx-orin",
    brand: "NVIDIA",
    name: "Jetson AGX Orin (64GB)",
    ramGB: 64.0,
    npuTops: 275,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "jetson-agx-thor",
    brand: "NVIDIA",
    name: "Jetson AGX Thor (128GB)",
    ramGB: 128.0,
    npuTops: 2070,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "hailo-8",
    brand: "Hailo",
    name: "Hailo-8 M.2 (26 TOPS)",
    ramGB: 8.0,
    npuTops: 26,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "hailo-10h",
    brand: "Hailo",
    name: "Hailo-10H M.2 (40 TOPS)",
    ramGB: 8.0,
    npuTops: 40,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite", "PyTorch"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "hailo-15",
    brand: "Hailo",
    name: "Hailo-15 VPU",
    ramGB: 4.0,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "kinara-ara-2",
    brand: "Kinara",
    name: "Ara-2 (40 TOPS)",
    ramGB: 16.0,
    npuTops: 40,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "PyTorch"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "rockchip-rk1820",
    brand: "Rockchip",
    name: "RK1820 (2.5GB Stacked)",
    ramGB: 2.5,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["RKNN"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "rockchip-rk1828",
    brand: "Rockchip",
    name: "RK1828 (5GB Stacked)",
    ramGB: 5.0,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["RKNN"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "deepx-dx-m1",
    brand: "DeepX",
    name: "DX-M1 M.2",
    ramGB: 4.0,
    npuTops: 25,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "memryx-mx3",
    brand: "MemryX",
    name: "MX3 (Dataflow NPU)",
    ramGB: 0.042,
    npuTops: 24,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
    category: "High-Performance Edge Accelerators",
  },
  {
    id: "qualcomm-cloud-ai-100",
    brand: "Qualcomm",
    name: "Cloud AI 100 Ultra",
    ramGB: 16.0,
    npuTops: 400,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite", "PyTorch"],
    category: "High-Performance Edge Accelerators",
  },

  // ──────────────────────────────────────────────────────
  // 4. AI PC / Client Edge
  // ──────────────────────────────────────────────────────
  {
    id: "intel-core-ultra-lunar-lake",
    brand: "Intel",
    name: "Core Ultra 200V (Lunar Lake)",
    ramGB: 32.0,
    npuTops: 48,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["OpenVINO", "ONNX", "GGUF"],
    category: "AI PC / Client Edge",
  },
  {
    id: "intel-core-ultra-panther-lake",
    brand: "Intel",
    name: "Core Ultra Series 3 (Panther Lake)",
    ramGB: 64.0,
    npuTops: 50,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["OpenVINO", "ONNX", "GGUF"],
    category: "AI PC / Client Edge",
  },
  {
    id: "qualcomm-snapdragon-x-elite",
    brand: "Qualcomm",
    name: "Snapdragon X Elite",
    ramGB: 32.0,
    npuTops: 45,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["ONNX", "GGUF", "PyTorch"],
    category: "AI PC / Client Edge",
  },
  {
    id: "qualcomm-snapdragon-x2-elite",
    brand: "Qualcomm",
    name: "Snapdragon X2 Elite",
    ramGB: 32.0,
    npuTops: 80,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["ONNX", "GGUF", "PyTorch"],
    category: "AI PC / Client Edge",
  },

  // ──────────────────────────────────────────────────────
  // Custom
  // ──────────────────────────────────────────────────────
  {
    id: "custom-device",
    brand: "Custom",
    name: "Custom Device",
    ramGB: 1.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["Any"],
    category: "Custom",
  },
];

export type TaskType = "Vision" | "NLP" | "Audio";
export type QuantizationType = "FP32" | "FP16" | "INT8" | "INT4";

export interface Model {
  id: string;
  name: string;
  task: TaskType;
  paramsBillion: number;
  quantization: QuantizationType;
  format: string;
  computeRequired: ComputeType[];
  description: string;
}

export const models: Model[] = [
  // ── Vision Models ──
  {
    id: "mobilenet-v2-rknn",
    name: "MobileNetV2 (RKNN)",
    task: "Vision",
    paramsBillion: 0.0034, // 3.4M
    quantization: "INT8",
    format: "RKNN",
    computeRequired: ["NPU"],
    description: "Fast and lightweight image classification model optimized for RKNN NPUs.",
  },
  {
    id: "yolov8n-rknn",
    name: "YOLOv8n (RKNN)",
    task: "Vision",
    paramsBillion: 0.0032, // 3.2M
    quantization: "INT8",
    format: "RKNN",
    computeRequired: ["NPU"],
    description: "Nano version of YOLOv8 for real-time object detection on RKNN devices.",
  },
  {
    id: "yolov11l-onnx",
    name: "YOLOv11 Large (ONNX)",
    task: "Vision",
    paramsBillion: 0.0258, // 25.8M
    quantization: "FP16",
    format: "ONNX",
    computeRequired: ["GPU", "NPU"],
    description: "MLPerf v6.0 edge benchmark model for single-shot object detection.",
  },
  {
    id: "yolov11l-tensorrt",
    name: "YOLOv11 Large (TensorRT)",
    task: "Vision",
    paramsBillion: 0.0258, // 25.8M
    quantization: "FP16",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "YOLOv11 Large optimized for NVIDIA TensorRT edge inference.",
  },
  {
    id: "resnet50-tensorrt",
    name: "ResNet-50 (TensorRT)",
    task: "Vision",
    paramsBillion: 0.0256, // 25.6M
    quantization: "FP16",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "MLPerf benchmark CNN for image classification on NVIDIA GPUs.",
  },
  {
    id: "resnet50-openvino",
    name: "ResNet-50 (OpenVINO)",
    task: "Vision",
    paramsBillion: 0.0256, // 25.6M
    quantization: "INT8",
    format: "OpenVINO",
    computeRequired: ["CPU", "NPU"],
    description: "ResNet-50 optimized for Intel Core Ultra NPUs via OpenVINO.",
  },
  {
    id: "efficientnet-lite-tflite",
    name: "EfficientNet-Lite (TFLite)",
    task: "Vision",
    paramsBillion: 0.0054, // 5.4M
    quantization: "INT8",
    format: "TFLite",
    computeRequired: ["CPU"],
    description: "Image classification optimized for mobile and edge CPUs.",
  },
  {
    id: "yolov8s-tensorrt",
    name: "YOLOv8s (TensorRT)",
    task: "Vision",
    paramsBillion: 0.0112, // 11.2M
    quantization: "FP16",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "Small version of YOLOv8 for edge GPUs with TensorRT acceleration.",
  },
  {
    id: "mobilenet-v2-tflite",
    name: "MobileNetV2 (TFLite)",
    task: "Vision",
    paramsBillion: 0.0034, // 3.4M
    quantization: "INT8",
    format: "TFLite",
    computeRequired: ["CPU", "NPU"],
    description: "Lightweight classification model for TFLite-compatible edge hardware.",
  },

  // ── NLP / LLM Models ──
  {
    id: "llama-3.1-8b-gguf",
    name: "Llama 3.1 8B (GGUF)",
    task: "NLP",
    paramsBillion: 8.0,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU", "GPU"],
    description: "Meta Llama 3.1 quantized to INT4 — MLPerf v5.0 benchmark model.",
  },
  {
    id: "phi-3-mini-gguf",
    name: "Phi-3 Mini (GGUF)",
    task: "NLP",
    paramsBillion: 3.8,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Microsoft small LLM optimized for low-memory edge deployment.",
  },
  {
    id: "qwen2.5-3b-gguf",
    name: "Qwen 2.5 3B (GGUF)",
    task: "NLP",
    paramsBillion: 3.0,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Alibaba compact LLM, strong multilingual performance on edge devices.",
  },
  {
    id: "qwen-1.5-1.8b-gguf",
    name: "Qwen 1.5 1.8B (GGUF)",
    task: "NLP",
    paramsBillion: 1.8,
    quantization: "INT8",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Ultra-compact language model for constrained edge devices.",
  },
  {
    id: "llama-3.1-8b-tensorrt",
    name: "Llama 3.1 8B (TensorRT)",
    task: "NLP",
    paramsBillion: 8.0,
    quantization: "INT4",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "Llama 3.1 8B optimized with TensorRT for Jetson edge GPUs.",
  },
  {
    id: "deepseek-r1-1.5b-gguf",
    name: "DeepSeek-R1 1.5B (GGUF)",
    task: "NLP",
    paramsBillion: 1.5,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Distilled reasoning model from DeepSeek for efficient edge inference.",
  },

  // ── Audio Models ──
  {
    id: "whisper-tiny-onnx",
    name: "Whisper Tiny (ONNX)",
    task: "Audio",
    paramsBillion: 0.039, // 39M
    quantization: "INT8",
    format: "ONNX",
    computeRequired: ["CPU", "NPU"],
    description: "OpenAI Whisper tiny model for speech recognition on edge NPUs.",
  },
  {
    id: "whisper-base-onnx",
    name: "Whisper Base (ONNX)",
    task: "Audio",
    paramsBillion: 0.074, // 74M
    quantization: "INT8",
    format: "ONNX",
    computeRequired: ["CPU", "NPU"],
    description: "Whisper base model — better accuracy than tiny with moderate RAM.",
  },
  {
    id: "bark-small-onnx",
    name: "Bark Small (ONNX)",
    task: "Audio",
    paramsBillion: 0.35, // 350M
    quantization: "FP16",
    format: "ONNX",
    computeRequired: ["GPU", "CPU"],
    description: "Text-to-Audio generation model for edge deployments.",
  },
];
