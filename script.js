/* =========================================================
   SCIENCE POOL SERV
   CHATBOT + WHATSAPP + FORM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const phoneNumber = "17869226379";
    const displayPhone = "(786) 922-6379";

    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsappMessage =
        "Hola SCIENCE POOL SERV, me gustaría obtener información sobre el servicio de piscinas.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    /* =====================================================
       CHATBOT HTML
    ===================================================== */

    const chatbotHTML = `
        <div class="chatbot-widget">

            <!-- CHAT BUTTON -->
            <button class="chatbot-button" id="chatbotButton">
                <span class="chatbot-icon">💬</span>
                <span class="chatbot-button-text">Chat with us</span>
            </button>

            <!-- CHAT WINDOW -->
            <div class="chatbot-window" id="chatbotWindow">

                <div class="chatbot-header">
                    <div>
                        <strong>SCIENCE POOL SERV</strong>
                        <small>Pool Service Assistant</small>
                    </div>

                    <button id="closeChatbot" class="chatbot-close">
                        ×
                    </button>
                </div>


                <div class="chatbot-messages" id="chatbotMessages">

                    <div class="bot-message">
                        👋 Hi! Welcome to <strong>SCIENCE POOL SERV</strong>.
                        <br><br>
                        How can we help you with your pool today?
                    </div>

                    <div class="bot-options">

                        <button data-question="pool-cleaning">
                            🧹 Pool Cleaning
                        </button>

                        <button data-question="pool-maintenance">
                            🔧 Pool Maintenance
                        </button>

                        <button data-question="green-pool">
                            💧 Green Pool
                        </button>

                        <button data-question="free-quote">
                            💰 Free Quote
                        </button>

                    </div>

                </div>


                <div class="chatbot-input-area">

                    <input
                        type="text"
                        id="chatbotInput"
                        placeholder="Type your message..."
                    />

                    <button id="sendChatMessage">
                        ➤
                    </button>

                </div>


                <div class="chatbot-whatsapp">

                    <a href="${whatsappURL}" target="_blank">
                        🟢 Continue on WhatsApp
                    </a>

                </div>

            </div>

        </div>
    `;


    document.body.insertAdjacentHTML("beforeend", chatbotHTML);


    /* =====================================================
       CHATBOT ELEMENTS
    ===================================================== */

    const chatbotButton = document.getElementById("chatbotButton");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const closeChatbot = document.getElementById("closeChatbot");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotInput = document.getElementById("chatbotInput");
    const sendChatMessage = document.getElementById("sendChatMessage");


    /* =====================================================
       OPEN / CLOSE CHAT
    ===================================================== */

    chatbotButton.addEventListener("click", () => {

        chatbotWindow.classList.add("active");

        chatbotButton.classList.add("hidden");

        setTimeout(() => {
            chatbotInput.focus();
        }, 300);

    });


    closeChatbot.addEventListener("click", () => {

        chatbotWindow.classList.remove("active");

        chatbotButton.classList.remove("hidden");

    });


    /* =====================================================
       ADD MESSAGE
    ===================================================== */

    function addMessage(text, sender = "bot") {

        const message = document.createElement("div");

        message.className =
            sender === "user"
                ? "user-message"
                : "bot-message";

        message.innerHTML = text;

        chatbotMessages.appendChild(message);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    /* =====================================================
       REMOVE OPTIONS
    ===================================================== */

    function removeOptions() {

        const options =
            chatbotMessages.querySelectorAll(".bot-options");

        options.forEach(option => option.remove());

    }


    /* =====================================================
       SHOW TYPING
    ===================================================== */

    function showTyping() {

        const typing = document.createElement("div");

        typing.className = "bot-message typing-message";

        typing.id = "typingMessage";

        typing.innerHTML = "● ● ●";

        chatbotMessages.appendChild(typing);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    function removeTyping() {

        const typing =
            document.getElementById("typingMessage");

        if (typing) {
            typing.remove();
        }

    }


    /* =====================================================
       BOT RESPONSE
    ===================================================== */

    function botResponse(type) {

        removeOptions();

        showTyping();

        setTimeout(() => {

            removeTyping();

            let response = "";

            if (type === "pool-cleaning") {

                response = `
                    🧹 <strong>Pool Cleaning</strong><br><br>
                    We provide professional pool cleaning
                    to keep your pool crystal clear and ready
                    to enjoy.
                    <br><br>
                    Would you like to request a free quote?
                `;

            }

            else if (type === "pool-maintenance") {

                response = `
                    🔧 <strong>Pool Maintenance</strong><br><br>
                    We can help with regular pool maintenance,
                    water care, cleaning and keeping your pool
                    in great condition.
                    <br><br>
                    Would you like a free quote?
                `;

            }

            else if (type === "green-pool") {

                response = `
                    💧 <strong>Green Pool?</strong><br><br>
                    Don't worry. We can help get your pool back
                    to clean, clear water.
                    <br><br>
                    Send us a message on WhatsApp and tell us
                    what is happening with your pool.
                `;

            }

            else if (type === "free-quote") {

                response = `
                    💰 <strong>Free Quote</strong><br><br>
                    Great! Let's get some basic information.
                    <br><br>
                    What is your name?
                `;

            }

            addMessage(response, "bot");

            if (type !== "free-quote") {

                setTimeout(() => {

                    addMessage(`
                        <strong>Ready to talk?</strong><br><br>
                        Click below to contact SCIENCE POOL SERV
                        directly on WhatsApp.
                    `, "bot");

                    addWhatsAppButton();

                }, 700);

            }

        }, 700);

    }


    /* =====================================================
       WHATSAPP BUTTON INSIDE CHAT
    ===================================================== */

    function addWhatsAppButton() {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "chat-whatsapp-action";

        wrapper.innerHTML = `
            <a href="${whatsappURL}" target="_blank">
                🟢 Contact us on WhatsApp
            </a>
        `;

        chatbotMessages.appendChild(wrapper);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    /* =====================================================
       QUICK OPTIONS
    ===================================================== */

    document.querySelectorAll("[data-question]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const question =
                    button.dataset.question;

                let text = button.textContent.trim();

                addMessage(text, "user");

                botResponse(question);

            });

        });


    /* =====================================================
       SEND TEXT MESSAGE
    ===================================================== */

    function sendMessage() {

        const text =
            chatbotInput.value.trim();

        if (!text) return;

        addMessage(text, "user");

        chatbotInput.value = "";

        showTyping();

        setTimeout(() => {

            removeTyping();

            const lowerText =
                text.toLowerCase();


            if (
                lowerText.includes("quote") ||
                lowerText.includes("price") ||
                lowerText.includes("cost") ||
                lowerText.includes("precio") ||
                lowerText.includes("cotizacion")
            ) {

                addMessage(`
                    💰 We'd be happy to provide a quote.
                    <br><br>
                    Please contact us directly on WhatsApp
                    so we can get the information needed
                    for your pool.
                `);

                addWhatsAppButton();

            }

            else if (
                lowerText.includes("green") ||
                lowerText.includes("verde") ||
                lowerText.includes("dirty") ||
                lowerText.includes("sucia")
            ) {

                addMessage(`
                    💧 We can help with green or dirty pools.
                    <br><br>
                    The fastest way to get help is through
                    WhatsApp.
                `);

                addWhatsAppButton();

            }

            else if (
                lowerText.includes("clean") ||
                lowerText.includes("cleaning") ||
                lowerText.includes("limpiar") ||
                lowerText.includes("limpieza")
            ) {

                addMessage(`
                    🧹 Yes! We offer professional pool cleaning
                    and maintenance services.
                    <br><br>
                    Would you like to request a free quote?
                `);

                addWhatsAppButton();

            }

            else if (
                lowerText.includes("hello") ||
                lowerText.includes("hi") ||
                lowerText.includes("hola")
            ) {

                addMessage(`
                    👋 Hello! Welcome to
                    <strong>SCIENCE POOL SERV</strong>.
                    <br><br>
                    We are here to help with your pool.
                    <br><br>
                    What service are you looking for?
                `);

            }

            else {

                addMessage(`
                    👍 Thanks for contacting
                    <strong>SCIENCE POOL SERV</strong>.
                    <br><br>
                    For the fastest response, please contact
                    us directly on WhatsApp.
                `);

                addWhatsAppButton();

            }

        }, 800);

    }


    sendChatMessage.addEventListener(
        "click",
        sendMessage
    );


    chatbotInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                sendMessage();
            }

        }
    );


    /* =====================================================
       ADD CHATBOT STYLES
    ===================================================== */

    const chatbotStyles = document.createElement("style");

    chatbotStyles.innerHTML = `

        /* CHAT BUTTON */

        .chatbot-button {

            position: fixed;

            right: 22px;
            bottom: 22px;

            z-index: 9999;

            display: flex;
            align-items: center;
            gap: 10px;

            padding: 15px 22px;

            border: none;
            border-radius: 50px;

            background: #10b981;
            color: white;

            font-size: 15px;
            font-weight: 800;

            cursor: pointer;

            box-shadow:
                0 10px 30px rgba(0,0,0,.22);

            transition: .25s ease;
        }


        .chatbot-button:hover {

            transform: translateY(-3px);

            background: #059669;

        }


        .chatbot-icon {

            font-size: 22px;

        }


        .chatbot-button.hidden {

            opacity: 0;
            pointer-events: none;
            transform: scale(.8);

        }


        /* CHAT WINDOW */

        .chatbot-window {

            position: fixed;

            right: 22px;
            bottom: 22px;

            width: 380px;
            max-width: calc(100vw - 30px);

            height: 560px;

            z-index: 10000;

            display: flex;
            flex-direction: column;

            overflow: hidden;

            border-radius: 20px;

            background: white;

            box-shadow:
                0 25px 70px rgba(0,0,0,.25);

            opacity: 0;

            transform:
                translateY(25px)
                scale(.95);

            pointer-events: none;

            transition: .3s ease;

        }


        .chatbot-window.active {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);

            pointer-events: auto;

        }


        /* HEADER */

        .chatbot-header {

            display: flex;

            align-items: center;
            justify-content: space-between;

            padding: 20px;

            background:
                linear-gradient(
                    135deg,
                    #123b6d,
                    #176ba7
                );

            color: white;

        }


        .chatbot-header strong {

            display: block;

            font-size: 16px;

            letter-spacing: .5px;

        }


        .chatbot-header small {

            display: block;

            margin-top: 4px;

            color:
                rgba(255,255,255,.72);

            font-size: 12px;

        }


        .chatbot-close {

            width: 35px;
            height: 35px;

            border: none;

            border-radius: 50%;

            background:
                rgba(255,255,255,.15);

            color: white;

            font-size: 25px;

            cursor: pointer;

        }


        /* MESSAGES */

        .chatbot-messages {

            flex: 1;

            overflow-y: auto;

            padding: 20px;

            background:
                #f5f9fc;

        }


        .bot-message,
        .user-message {

            max-width: 88%;

            margin-bottom: 12px;

            padding: 12px 15px;

            border-radius: 15px;

            font-size: 14px;

            line-height: 1.55;

        }


        .bot-message {

            margin-right: auto;

            background: white;

            color: #173b68;

            border:
                1px solid #e4edf3;

            border-bottom-left-radius: 4px;

        }


        .user-message {

            margin-left: auto;

            background: #26b8e6;

            color: white;

            border-bottom-right-radius: 4px;

        }


        /* OPTIONS */

        .bot-options {

            display: grid;

            gap: 8px;

            margin-bottom: 18px;

        }


        .bot-options button {

            padding: 11px 14px;

            border:
                1px solid #cfe3ec;

            border-radius: 10px;

            background: white;

            color: #123b6d;

            font-weight: 700;

            text-align: left;

            cursor: pointer;

            transition: .2s ease;

        }


        .bot-options button:hover {

            border-color: #26b8e6;

            background: #eefaff;

        }


        /* TYPING */

        .typing-message {

            letter-spacing: 3px;

            font-weight: 800;

            color: #26b8e6;

        }


        /* INPUT */

        .chatbot-input-area {

            display: flex;

            gap: 8px;

            padding: 12px;

            border-top:
                1px solid #e5edf2;

            background: white;

        }


        .chatbot-input-area input {

            flex: 1;

            min-width: 0;

            padding: 12px 13px;

            border:
                1px solid #d7e4eb;

            border-radius: 10px;

            outline: none;

            color: #173b68;

        }


        .chatbot-input-area input:focus {

            border-color: #26b8e6;

        }


        .chatbot-input-area button {

            width: 45px;

            border: none;

            border-radius: 10px;

            background: #26b8e6;

            color: white;

            font-size: 18px;

            cursor: pointer;

        }


        /* WHATSAPP */

        .chatbot-whatsapp {

            padding: 10px 12px;

            background: white;

        }


        .chatbot-whatsapp a,
        .chat-whatsapp-action a {

            display: block;

            padding: 11px;

            border-radius: 10px;

            background: #10b981;

            color: white;

            text-align: center;

            font-size: 13px;

            font-weight: 800;

        }


        .chat-whatsapp-action {

            margin: 5px 0 15px;

        }


        /* MOBILE */

        @media (max-width: 600px) {

            .chatbot-window {

                right: 10px;
                bottom: 10px;

                width:
                    calc(100vw - 20px);

                height:
                    calc(100vh - 90px);

                max-height: 650px;

                border-radius: 18px;

            }


            .chatbot-button {

                right: 15px;
                bottom: 15px;

            }

        }

    `;


    document.head.appendChild(chatbotStyles);


    /* =====================================================
       MAKE EXISTING PHONE LINKS WORK
    ===================================================== */

    document.querySelectorAll("a").forEach(link => {

        const text =
            link.textContent.toLowerCase();

        if (
            text.includes("call") ||
            text.includes("phone") ||
            text.includes("tel")
        ) {

            link.href = `tel:+1${phoneNumber}`;

        }

    });


    
           /* =====================================================
       FREE QUOTE BUTTONS -> CONTACT
    ===================================================== */

    document.querySelectorAll("a").forEach(link => {

        const text =
            link.textContent.toLowerCase();

        if (
            text.includes("free quote") ||
            text.includes("get a quote") ||
            text.includes("quote")
        ) {

            if (
                !link.href.includes("wa.me") &&
                !link.href.startsWith("tel:")
            ) {

                link.addEventListener("click", () => {

                    const contact =
                        document.querySelector("#contact");

                    if (contact) {

                        contact.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                });

            }

        }

    });


    /* =====================================================
       QUOTE FORM -> WHATSAPP
    ===================================================== */

    const quoteForm =
        document.querySelector("#quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.querySelector("#name").value.trim();

            const phone =
                document.querySelector("#phone").value.trim();

            const email =
                document.querySelector("#email").value.trim();

            const service =
                document.querySelector("#service").value;

            const message =
                document.querySelector("#message").value.trim();

            const quoteMessage =
                `NEW POOL SERVICE REQUEST

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}
Message: ${message || "No additional message"}`;

            const quoteURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(quoteMessage)}`;

           window.location.href = quoteURL;

        });

    }

});
