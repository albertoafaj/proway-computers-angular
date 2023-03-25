export interface IProduct {
  id: number;
  description: string;
  price: number;
  paymentOption: string;
  image: string;
  stock: number;
}

export interface Cart extends IProduct {
  quantity: number;
}

export const products = [
  { id: 1, description: "Mouse gamer", price: 439.00, paymentOption: "À vista no PIX", image: "/assets/mouse-3.jpg", stock: 10 },
  { id: 2, description: "Monitor muito bom", price: 1200.50, paymentOption: "À vista no PIX", desconto: 2000.00, image: "/assets/monitor-1.jpg", stock: 10 },
  { id: 3, description: "Teclado excelente", price: 749.99, paymentOption: "À vista no PIX", image: "/assets/teclado-1.jpg", stock: 10 },
  { id: 4, description: "Fone para quem joga FPS", price: 599.99, paymentOption: "À vista no PIX", image: "/assets/fone-de-ouvido-2.jpg", stock: 10 },
  { id: 5, description: "Fone de ouvido", price: 299.99, paymentOption: "À vista no PIX", image: "/assets/fone-de-ouvido-1.jpg", stock: 10 },
  { id: 6, description: "Fone de ouvido bom", price: 399.99, paymentOption: "À vista no PIX", image: "/assets/fone-de-ouvido-3.jpg", stock: 10 },
  { id: 7, description: "HD 1TB", price: 499.99, paymentOption: "À vista no PIX", image: "/assets/hd.jpg", stock: 10 },
  { id: 8, description: "Combo de placa de vídeos", price: 18449.99, paymentOption: "À vista no PIX", image: "/assets/placa-video.jpg", stock: 10 },
  { id: 9, description: "Processador Ryzen", price: 1000, paymentOption: "À vista no PIX", image: "/assets/processador.jpg", stock: 10 },
  { id: 10, description: "Notebook bom", price: 2500, paymentOption: "À vista no PIX", image: "/assets/laptop-1.jpg", stock: 10 },
  { id: 11, description: "Notebook excelente", price: 4500, paymentOption: "À vista no PIX", image: "/assets/laptop-2.jpg", stock: 10 },
  { id: 12, description: "Mouse barato", price: 20, paymentOption: "À vista no PIX", image: "/assets/mouse-1.png", stock: 10 },
  { id: 13, description: "Mouse ótimo", price: 200, paymentOption: "À vista no PIX", image: "/assets/mouse-2.jpg", stock: 10 },
  { id: 14, description: "Mouse pequeno", price: 50, paymentOption: "À vista no PIX", image: "/assets/mouse-4.jpg", stock: 10 },
  { id: 15, description: "Teclado bom", price: 159.99, paymentOption: "À vista no PIX", image: "/assets/teclado-2.jpg", stock: 10 },
]