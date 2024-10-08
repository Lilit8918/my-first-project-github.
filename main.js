const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
fontAwesome.integrity = 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==';
fontAwesome.crossOrigin = 'anonymous';
fontAwesome.referrerPolicy = 'no-referrer';
document.head.appendChild(fontAwesome);
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #F0E68C;
        padding: 10px;
        text-align: right;
        height: 100px;
    }
    header a {
        text-decoration: none;
        color: blue;
        padding: 10px;
    }
    nav {
        width: 200px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        // background-color: #BDB76B; 
        background-color: #D2691E !important;
        padding-top: 20px;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
    }
    nav ul li {
        padding: 10px;
    }
    nav ul li a {
        text-decoration: none;
        color: white;
    }

    main {
        margin-left: 210px;
        padding: 20px;
    }
    section {
        margin-bottom: 20px;
        border: 1px solid #ccc;
        padding: 10px;
        // color: #FFD700;
        background-color:#FFFFE0;
        height: 500px;
    }
    section h{
        color: #FFD700;
    }
    footer {
        position: fixed;
        bottom: 0;
        left: 210px;
        right: 0;
        background-color:#F0E68C;
        padding: 10px;
        text-align: center;
        height: 100px;
    }
    .scroll-section {
        overflow-y: auto;
        height: 500px;
    }
    .page {
        background-color:#F5F5DC;
        max-width: 1200px;
        margin: auto;
        padding: 0 20px;
    }
    @media only screen and (max-width: 1300px) {
        .page {
            max-width: 800px;
        }
    }
    @media only screen and (max-width: 1100px) {
        .page {
            max-width: 700px;
        }}
    @media only screen and (max-width: 960px) {
        .page {
            max-width: 600px;
        }
`;
document.head.appendChild(style);


document.body.innerHTML = `
    <header>

        <a href="login.html" class="btn btn-primary" id = "login">Log in</a>
    </header>
    <div class="page">
    <nav class="bg-dark p-3">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link text-white" href="#login">Log in</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#container">Angel's Song</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#Salads Menu">Salads Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#Desserts Menu">Desserts Menu</a>
            </li>
        </ul>
    </nav>
    <main class="container" id ="container">
        <section class="scroll-section border p-3">
        <i class="fa-solid fa-music"></i>
        <i class="fa-solid fa-music"></i>
        <i class="fa-solid fa-music"></i>
            <h2 class="text-primary">Angel's Song Restaurant Menu<br>
            Symphony of Flavors | Համերի սիմֆոնիան վայելեք</h2>
            <i class="fa-solid fa-music"></i>
            <i class="fa-solid fa-music"></i>
            <i class="fa-solid fa-music"></i>
            <p><h1>Drinks Menu | Խմիչքների Մենյու</h1>
            <i class="fa-solid fa-martini-glass"></i>
            Beethoven Cocktail | Բեթհովեն կոկտեյլ
            Ingredients: Cognac, Peach Juice, Sprite
            Բաղադրությունը: Կոնյակ, Դեղձի Հյութ, Սպրայթ<br>
            <i class="fa-solid fa-martini-glass"></i>
            Bach Cocktail | Բախ կոկտեյլ
            Ingredients: Martini, Orange Juice, Mint
            Բաղադրությունը: Մարտինի, Նարնջի Հյութ, Անանուխ<br>
            <i class="fa-solid fa-martini-glass"></i>
            Aram Khachaturian Cocktail | Արամ Խաչատրյան կոկտեյլ
            Ingredients: Mulberry Vodka, Jermuk, Lemon
            Բաղադրությունը: Թթի Օղի, Ջերմուկ, Լիմոն<br>
            <i class="fa-regular fa-mug-hot"></i>
            Notaccino | Նոտաչինո
            Ingredients: Cappuccino with cardamom, served with a treble clef design
            Բաղադրությունը: Կապուչինո հիլով, մատուցվում է սոլի բանալիի դիզայնով<br>
            <i class="fa-regular fa-mug-hot"></i>
            Autumn Melody Tea | Աշնանային Մեղեդի Թեյ
            Ingredients: Rosehip, Ginger, Honey
            Բաղադրությունը: Մասուր, Կոճապղպեղ, Մեղր
            Description: A warming and soothing tea blend, perfect for the autumn season, made with rosehip, ginger, and a touch of honey.
            Նկարագրություն: Տաքացնող և հանգստացնող թեյ՝ իդեալական աշնան համար, մասուրով, կոճապղպեղով և մեղրով։
            </p>
        </section>
        <section class="border p-3">
            <h2 class="text-primary" id ="Salads Menu">Salads Menu | Աղցանների Մենյու</h2>
            <p> <i class="fa-regular fa-salad"></i><h3>New Year’s Musical Salad | Ամանորյա Մյուզիքլ Աղցան</h3><br>
            Ingredients: Apple, Carrot, Cinnamon
            Բաղադրությունը: Խնձոր, Գազար, Դարչին<br>
            Description: A fresh and aromatic salad perfect for the holiday season, with the sweetness of apple, the earthiness of carrot, and a hint of cinnamon.
            Նկարագրություն: Թարմ և բուրումնավետ աղցան՝ իդեալական ամանորի համար, խնձորի քաղցրությամբ, գազարի նուրբ համով և դարչինի հպումով։
            </p>
        </section>
        <section class="border p-3">
            <h2 class="text-primary" id ="Desserts Menu">Desserts Menu | Խմորեղենի Մենյու</h2>
            <p><h3>Piano Cake | Դաշնամուր Տորթ</h3>
            Description: A cake in the shape of a grand piano, with a rich and creamy Eskimo filling.<br>
            Բաղադրություն: Տորթ դաշնամուրի տեսքով, էսկիմո լցոնով։
            <h3>Ice Cream with Chocolate Notes | Պաղպաղակ Շոկոլադե Նոտաներով</h3>
            
            Description: Delicious ice cream served with musical chocolate notes.<br>
            Բաղադրություն: Պաղպաղակ՝ շոկոլադե նոտաներով զարդարված։
            </p>
        </section>
    </main>
    </div>
    <footer class="bg-light">
        <p>&copy; 2024 Angel's Song</p>
    </footer>
`;
