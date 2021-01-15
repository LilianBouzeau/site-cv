<!doctype html>
<html lang="en">
	<head>
		<title>Lilian Bouzeau</title>
		<link rel="icon" type="image/x-icon" href="favicon.ico">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!--icône-->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet">
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<!--CSS-->
		<link rel="stylesheet" href="css/view.css">
	</head>
	<body>
		<header>
			<div id="navAlert" style="position:absolute;width:100%;margin-top:15px;"></div>
			<nav class="navbar navbar-expand-xl sticky-top">
				<a class="navbar-brand">
					<img class="imageHeader" src="images/logo.png" width="100" height="100" class="d-inline-block align-top" alt="logo du site">
				</a>
				<li class="header my-2 bottom">
					<button type="button" class="btn btn-outline-light"  id="btnTheme"><i class="fas fa-moon colorH"></i></button>
					<button type="button" class="btn btn-outline-light"  id="btnTheme2"><i class="fas fa-sun colorH2"></i></button>
				</li>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"><i style="font-size:30px; color:white;" class="fas fa-angle-down"></i></span>
				</button>
				<div class="collapse navbar-collapse" id="navbar">
					<ul class="navbar-nav mr-auto navText" style="margin:auto">
						<li class="header my-2 mx-4 top">
							<a class="nav text-white " href="index.php#aPropos">Qui suis-je ? </a>
						</li>
						<li class="header my-2 mx-4 bottom">
							<a class="nav text-white" href="index.php#competence">Compétences</a>
						</li>
						<li class="header my-2 mx-4 top">
							<a class="nav text-white" href="index.php#langages">Langages/Framework</a>
						</li>
						<li class="header my-2 mx-4 bottom">
							<a class="nav text-white" href="index.php#diplome">Diplôme/Expériences</a>
						</li>
						<li class="header my-2 mx-4 top">
							<a class="nav text-white" href="index.php#contact">Contact</a>
						</li>
						<li class="header my-2 mx-4 bottom">
							<a class="nav text-white" target="_blank" href="images\LilianBouzeau_Cv.png">CV</a>
						</li>
						<li class="header my-2 mx-4 top">
							<button type="button" class="btn btn-outline-light" data-toggle="modal"
								data-target="#modalContactNavbar">
								<i class="far fa-envelope"></i> Contact
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<div class="container">
				<div class="justify-content-center">
					<h1 class="titre">Bouzeau Lilian</h1>
					<div class="separateurHeader"></div>
					<h1 class="sousTitre">Développeur web et web mobile</h1>
				</div>
			<div>
		</header>
		<!-- Modal Navbar contact-->
<div class="modal fade"  id="modalContactNavbar" tabindex="-1" role="dialog" aria-labelledby="modalContactNavbar"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content colorFond border-dark">
            <div class="modal-header">
                <h5 class="modal-title titre-Fcontact" id="modalNavbar">Contact</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body ">
                <form method="POST" id="formulaire">
					<div class="form-group">
						<label for="message">Prenom :</label>
						<input class="form-control" type="text" name="prenom" id="prenom" placeholder="Prenom" required maxlength="20">
						<span id="prenom_manquant"></span>
					</div>
					<div class="form-group">
						<label for="message">Nom de famille :</label>
						<input class="form-control" type="text" name="nom" id="nom" placeholder="Nom de famille" required maxlength="30">
						<span id="nom_manquant"></span>
					</div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input class="form-control" type="email" name="email" id="email"
                            placeholder="exemple@gmail.com"required maxlength="125">
						<span id="email_manquant"></span>
					</div>
					<div class="form-group">
					<label for="email">Numéro:</label>
						<input class="form-control" type="tel" name="telephone" id="telephone" placeholder="07.00.00.00.00" required maxlength="12">
						<span id="telephone_manquant"></span>
					</div>
                    <div class="form-group">
						<label for="message">Message :</label>
						<textarea class="form-control" name="message" id="message" placeholder="Vous pouvez écrire votre message ici." rows="3" required maxlength="300"></textarea>
						<span id="message_manquant"></span>
					</div>
                    <div class="form-group text-center">
						<input type="submit" class="btn btn-outline-dark" name="submitContact"
                            id="submitContact" value="Envoyer">
						</div>
                </form>
            </div>
        </div>
    </div>
</div>