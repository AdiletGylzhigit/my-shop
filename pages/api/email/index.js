// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

const BASE_URL = "https://jigitplus.vercel.app";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    // slug,
    // quantity,

    const {
      name,
      slug,
      size,
      color,
      quantity,
      fullName,
      address,
      phoneNumber,
      email: emailAddress,
      totalPrice,
    } = req.body;

    // send gmail message
    let config = {
      service: "gmail",
      auth: {
        user: email,
        pass,
      },
    };

    let transporter = nodemailer.createTransport(config);

    let MailgenGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "JIGIT+",
        link: `${BASE_URL}`,
      },
    });

    // Определитель Продукта: ${slug}, Количество: ${quantity},

    let response = {
      body: {
        greeting: false,
        signature: false,
        intro: "Пришёл новый заказ, данные заказа: ",
        action: {
          instructions: `Продукт: ${name}, Slug продукта: ${slug}, Размер: ${size}, Цвет: ${color}, Итоговая цена: $${totalPrice}, Количество: ${quantity}, Полное Имя: ${fullName}, Адрес доставки: ${address}, Номер тел: ${phoneNumber}, Email: ${emailAddress}`,
          button: {
            color: "#22BC66", // Optional action button color
            text: "Зайти в магазин",
            link: `${BASE_URL}/products`,
          },
        },
      },
    };

    let mail = MailgenGenerator.generate(response);

    let message = {
      from: "Новый заказ - JIGIT+ <jigitreply@gmail.com>",
      to: "<jigitreply@gmail.com>",
      subject: "Новый заказ",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).send({ msg: "you should receive an email" });
      })
      .catch((error) => {
        return res.status(500).send({ error: `Erorr ${error}` });
      });
  }
};

export default handler;
