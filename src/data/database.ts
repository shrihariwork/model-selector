export type ComputeType = "CPU" | "NPU" | "GPU";

export interface Device {
  id: string;
  brand: string;
  name: string;
  ramGB: number;
  npuTops: number;
  computeType: ComputeType[];
  supportedFormats: string[];
}

export const devices: Device[] = [
  // 1. Micro-Edge & TinyML
  {
    id: "luckfox-pico-mini-ab",
    brand: "Luckfox",
    name: "Pico Mini A / Mini B",
    ramGB: 0.064,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "luckfox-pico",
    brand: "Luckfox",
    name: "Pico / Pico Plus",
    ramGB: 0.064,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "luckfox-pico-pro",
    brand: "Luckfox",
    name: "Pico Pro / Ultra B",
    ramGB: 0.128,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "luckfox-pico-max",
    brand: "Luckfox",
    name: "Pico Max / Ultra",
    ramGB: 0.256,
    npuTops: 1.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN", "ONNX"],
  },
  {
    id: "seeed-xiao-esp32s3",
    brand: "Seeed Studio",
    name: "XIAO ESP32-S3 Sense",
    ramGB: 0.008,
    npuTops: 0.1,
    computeType: ["CPU"],
    supportedFormats: ["TFLite", "ONNX"],
  },
  {
    id: "arduino-nano-33",
    brand: "Arduino",
    name: "Nano 33 BLE Sense Rev2",
    ramGB: 0.000256,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["TFLite"],
  },
  {
    id: "openmv-ae3",
    brand: "OpenMV",
    name: "OpenMV AE3",
    ramGB: 0.008,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["TFLite"],
  },
  {
    id: "openmv-n6",
    brand: "OpenMV",
    name: "OpenMV N6",
    ramGB: 0.032,
    npuTops: 1.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["TFLite", "ONNX"],
  },

  // 2. General Purpose Edge & SBCs
  {
    id: "raspberry-pi-5-standard",
    brand: "Raspberry Pi",
    name: "Pi 5 (8GB)",
    ramGB: 8.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["GGUF", "TFLite", "ONNX"],
  },
  {
    id: "raspberry-pi-5-hailo",
    brand: "Raspberry Pi",
    name: "Pi 5 + Hailo AI HAT+",
    ramGB: 8.0,
    npuTops: 26.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["ONNX", "TFLite"],
  },
  {
    id: "rockchip-rk3588",
    brand: "Rockchip",
    name: "RK3588 SBC (8GB)",
    ramGB: 8.0,
    npuTops: 6.0,
    computeType: ["CPU", "NPU", "GPU"],
    supportedFormats: ["RKNN", "ONNX"],
  },
  {
    id: "rockchip-rk3688",
    brand: "Rockchip",
    name: "RK3688 SBC (16GB)",
    ramGB: 16.0,
    npuTops: 10.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN", "ONNX"],
  },
  {
    id: "google-coral-dev",
    brand: "Google",
    name: "Coral Dev Board",
    ramGB: 1.0,
    npuTops: 4.0,
    computeType: ["NPU"],
    supportedFormats: ["TFLite"],
  },

  // 3. High-Performance Edge Accelerators
  {
    id: "jetson-orin-nano",
    brand: "NVIDIA",
    name: "Jetson Orin Nano",
    ramGB: 8.0,
    npuTops: 40,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
  },
  {
    id: "jetson-orin-nx",
    brand: "NVIDIA",
    name: "Jetson Orin NX",
    ramGB: 16.0,
    npuTops: 100,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
  },
  {
    id: "jetson-agx-orin",
    brand: "NVIDIA",
    name: "Jetson AGX Orin",
    ramGB: 64.0,
    npuTops: 275,
    computeType: ["CPU", "GPU"],
    supportedFormats: ["TensorRT", "PyTorch", "ONNX"],
  },
  {
    id: "hailo-8",
    brand: "Hailo",
    name: "Hailo-8 M.2",
    ramGB: 8.0,
    npuTops: 26,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
  },
  {
    id: "hailo-15",
    brand: "Hailo",
    name: "Hailo-15 VPU",
    ramGB: 4.0,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
  },
  {
    id: "kinara-ara-2",
    brand: "Kinara",
    name: "Ara-2",
    ramGB: 16.0,
    npuTops: 40,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "PyTorch"],
  },
  {
    id: "rockchip-rk1820",
    brand: "Rockchip",
    name: "RK1820",
    ramGB: 2.5,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "rockchip-rk1828",
    brand: "Rockchip",
    name: "RK1828",
    ramGB: 5.0,
    npuTops: 20,
    computeType: ["NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "deepx-dx-m1",
    brand: "DeepX",
    name: "DX-M1",
    ramGB: 4.0,
    npuTops: 25,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
  },
  {
    id: "memryx-mx3",
    brand: "MemryX",
    name: "MX3",
    ramGB: 0.042,
    npuTops: 24,
    computeType: ["NPU"],
    supportedFormats: ["ONNX", "TFLite"],
  },

  {
    id: "custom-device",
    brand: "Custom",
    name: "Custom Device",
    ramGB: 1.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["Any"],
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
  {
    id: "mobilenet-v2-rknn",
    name: "MobileNetV2 (RKNN)",
    task: "Vision",
    paramsBillion: 0.0034, // 3.4M
    quantization: "INT8",
    format: "RKNN",
    computeRequired: ["NPU"],
    description: "Fast and lightweight image classification model optimized for RKNN.",
  },
  {
    id: "yolov8n-rknn",
    name: "YOLOv8n (RKNN)",
    task: "Vision",
    paramsBillion: 0.0032, // 3.2M
    quantization: "INT8",
    format: "RKNN",
    computeRequired: ["NPU"],
    description: "Nano version of YOLOv8 for real-time object detection.",
  },
  {
    id: "llama-3-8b-gguf",
    name: "Llama-3-8B (GGUF)",
    task: "NLP",
    paramsBillion: 8.0,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU", "GPU"],
    description: "Highly capable LLM quantized to INT4 for edge deployment.",
  },
  {
    id: "whisper-tiny-onnx",
    name: "Whisper Tiny (ONNX)",
    task: "Audio",
    paramsBillion: 0.039, // 39M
    quantization: "INT8",
    format: "ONNX",
    computeRequired: ["CPU", "NPU"],
    description: "Automatic speech recognition (ASR) system.",
  },
  {
    id: "phi-3-mini-gguf",
    name: "Phi-3 Mini (GGUF)",
    task: "NLP",
    paramsBillion: 3.8,
    quantization: "INT4",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Small LLM from Microsoft optimized for low memory usage.",
  },
  {
    id: "resnet50-tensorrt",
    name: "ResNet-50 (TensorRT)",
    task: "Vision",
    paramsBillion: 0.0256, // 25.6M
    quantization: "FP16",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "Classic CNN for image classification optimized with TensorRT.",
  },
  {
    id: "qwen-1.5-1.8b-gguf",
    name: "Qwen 1.5 1.8B (GGUF)",
    task: "NLP",
    paramsBillion: 1.8,
    quantization: "INT8",
    format: "GGUF",
    computeRequired: ["CPU"],
    description: "Compact language model suitable for smaller edge devices.",
  },
  {
    id: "yolov8s-tensorrt",
    name: "YOLOv8s (TensorRT)",
    task: "Vision",
    paramsBillion: 0.0112, // 11.2M
    quantization: "FP16",
    format: "TensorRT",
    computeRequired: ["GPU"],
    description: "Small version of YOLOv8 for edge GPUs.",
  },
  {
    id: "bark-small-onnx",
    name: "Bark Small (ONNX)",
    task: "Audio",
    paramsBillion: 0.35, // 350M
    quantization: "FP16",
    format: "ONNX",
    computeRequired: ["GPU", "CPU"],
    description: "Text-to-Audio model.",
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
  }
];
