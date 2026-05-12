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
  {
    id: "luckfox-pico-max",
    brand: "Luckfox",
    name: "Pico Max",
    ramGB: 0.256,
    npuTops: 1.0,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN", "ONNX"],
  },
  {
    id: "luckfox-pico-mini-b",
    brand: "Luckfox",
    name: "Pico Mini B",
    ramGB: 0.064,
    npuTops: 0.5,
    computeType: ["CPU", "NPU"],
    supportedFormats: ["RKNN"],
  },
  {
    id: "raspberry-pi-5-8gb",
    brand: "Raspberry Pi",
    name: "Pi 5 (8GB)",
    ramGB: 8.0,
    npuTops: 0,
    computeType: ["CPU"],
    supportedFormats: ["GGUF", "TFLite", "ONNX"],
  },
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
