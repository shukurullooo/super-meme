import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios from "axios";

const BOT_TOKEN = "7964587721:AAFaHK7apghKymDvqL7rZuJMnRsNFnwlsVI";
const CHAT_ID = "5586262958";//5586262958//7753797066

const Chekaut = () => {
  const cart = useSelector((state) => state.cart.value);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return <Navigate to="/cart" replace />;
  }

  const onFinish = (values) => {
    const text = `
🛒 Yangi Buyurtma:

 Ismi: ${values.name}
 Manzil: ${values.address}
 Tel: ${values.tel}
Email: ${values.email}

 Mahsulotlar:
${cart.map((item, index) => (
      `#${index + 1} - ${item.title} (${item.quantity} dona) = ${item.price * item.quantity} so'm`
    )).join("\n")}

Umumiy summa: ${total} so'm
`;

    axios
      .get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        params: {
          chat_id: CHAT_ID,
          text: text,
        },
      })
     
  };

  return (
    <div className="p-10 min-h-screen max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Buyurtma ma'lumotlari</h2>
      <Form name="checkout" layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Ism"
          name="name"
          rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Manzil"
          name="address"
          rules={[{ required: true, message: "Iltimos, manzilingizni kiriting!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Telefon raqam"
          name="tel"
          rules={[{ required: true, message: "Iltimos, telefon raqamingizni kiriting!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Iltimos, emailingizni kiriting!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Buyurtma berish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Chekaut;
