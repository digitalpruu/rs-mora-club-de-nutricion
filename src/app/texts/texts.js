const title = "RS Mora Club de Nutrición";
const email = "ROSAURA468@YAHOO.ES";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "+573138745028";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "RS Mora Club de nutrición es un espacio dedicado al bienestar y la salud, donde promovemos hábitos alimenticios saludables y un estilo de vida equilibrado. Con un enfoque personalizado, buscamos que cada miembro de nuestro club alcance sus objetivos de bienestar a través de la nutrición y el acompañamiento constante.",
        description2: "Nuestro compromiso es guiar a nuestros clientes hacia un estado óptimo de salud, ofreciendo asesorías de calidad y productos naturales que contribuyen a su bienestar integral. En RS Mora Club de nutrición, creemos que el bienestar no es solo una meta, sino un estilo de vida que merece ser disfrutado por todos."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Club de bienestar",
            p2: ""
        },
        address: "Dirección del emprendimiento",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/SOMORA",
        instagram: "https://www.instagram.com/R_SMORA",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        website: "https://rsmoraclubdenutricion.vercel.app/"
    },
};
export default textos;
