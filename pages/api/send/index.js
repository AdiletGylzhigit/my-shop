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
      name2,
      quantity2,
      size2,
      color2,
      name3,
      quantity3,
      size3,
      color3,
      name4,
      quantity4,
      size4,
      color4,
      name5,
      quantity5,
      size5,
      color5,
      name6,
      quantity6,
      size6,
      color6,
      name7,
      quantity7,
      size7,
      color7,
      name8,
      quantity8,
      size8,
      color8,
      name9,
      quantity9,
      size9,
      color9,
      name10,
      quantity10,
      size10,
      color10,
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
        action: {
          instructions: `Продукт: ${name} размер-(${size}) цвет-(${color}) кол-(${quantity}), ${name2 ? `Продукт: ${name2} размер-(${size2}) цвет-(${color2}) кол-(${quantity2}),` : ''} ${name3 ? `Продукт: ${name3} размер-(${size3}) цвет-(${color3}) кол-(${quantity3}),` : ''} ${name4 ? `Продукт: ${name4} размер-(${size4}) цвет-(${color4}) кол-(${quantity4}),` : ''} ${name5 ? `Продукт: ${name5} размер-(${size5}) цвет-(${color5}) кол-(${quantity5}),` : ''} ${name6 ? `Продукт: ${name6} размер-(${size6}) цвет-(${color6}) кол-(${quantity6}),` : ''} ${name7 ? `Продукт: ${name7} размер-(${size7}) цвет-(${color7}) кол-(${quantity7}),` : ''} ${name8 ? `Продукт: ${name8} размер-(${size8}) цвет-(${color8}) кол-(${quantity8}),` : ''} ${name9 ? `Продукт: ${name9} размер-(${size9}) цвет-(${color9}) кол-(${quantity9}),` : ''} ${name10 ? `Продукт: ${name10} размер-(${size10}) цвет-(${color10}) кол-(${quantity10}),` : ''} Итоговая цена: $${totalPrice}, Указанные данные - полное Имя: ${fullName}, Адрес доставки: ${address}, Номер тел: ${phoneNumber}, Email: ${emailAddress}`,
          button: {
            color: "#22BC66",
            text: "Продолжить покупку",
            link: `${BASE_URL}/products`,
          },
        },
        outro: 'доставка займет около 1-3 дней, спасибо за покупку.',
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
