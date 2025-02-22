const public_key = "cP6wkTDtzJPVMDUat";
const secret_key = "EOVJeipE9nBph3U7--aT-";

(function () {
    emailjs.init(public_key)
})();

document
    .getElementById("contatoForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (!nome || !email || !mensagem) {
            alert("Por favor, Preencha todos os campos!");
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem,
        };

        const serviceID = "service_w40680j";
        const templateID = "template_bg3v45g";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                console.log(res);
                alert("Mensagem enviada com sucesso!");
            })
            .catch((err) => console.log(err));
    });