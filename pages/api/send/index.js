// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

const BASE_URL = "https://jigitplus.vercel.app";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    const {
      name,
      quantity,
      size,
      color,
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
        greeting: "Здравствуйте",
        signature: "С Уважением",
        name: `Уважаемый ${emailAddress}`,
        intro: "Вы сделали заказ: ",
        table: {
          data: [
            {
              продукт: `${name}`,
              размер: `${size}`,
              цвет: `${color}`,
              кол: `${quantity}`,
              цена: `$${totalPrice}`,
            },
          ],
        },
        outro: `Указанные данные, Полное Имя: ${fullName}, Адрес доставки: ${address}, Номер тел: ${phoneNumber}, Email: ${emailAddress}`,
      },
    };

    let mail = MailgenGenerator.generate(response);

    let message = {
      from: "Ваш заказ - JIGIT+ <jigitreply@gmail.com>",
      to: `${emailAddress}`,
      subject: "Ваш заказ",
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
