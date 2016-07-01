<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<title>Home | Project PortFolio Management</title>
<link href="components/bootstrap.min.css" rel="stylesheet">
    <link href="components/font-awesome.min.css" rel="stylesheet">
    <link href="components/prettyPhoto.css" rel="stylesheet">
    <link href="components/price-range.css" rel="stylesheet">
    <link href="components/animate.css" rel="stylesheet">
	<link href="components/main.css" rel="stylesheet">
	<link href="components/responsive.css" rel="stylesheet">
<!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
<link rel="shortcut icon" href="images/ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144"
	href="images/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114"
	href="images/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72"
	href="images/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed"
	href="images/ico/apple-touch-icon-57-precomposed.png">
</head>
<!--/head-->

<body>
	<header id="header"><!--header-->
	<div class="header-middle">
		<!--header-middle-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<div class="logo pull-left">
						<a href="index.jsp"> <img src="components/images/home/logo.jpg"
							style="height: 80px; width: 150px;" />
						</a>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="shop-menu pull-right">
						<div class="col-sm-3">
							<div class="search_box pull-right">
								<input type="text" placeholder="Search" />
							</div>
						</div>
						<ul class="nav navbar-nav">

							<li><a href="login.jsp"><i class="fa fa-lock"></i>
									${empty sessionScope.cust?'Sign In':'Sign Out' }</a></li>
							<li><a href="#"><i class="fa fa-user"></i>Hello, ${empty sessionScope.cust?'anonymous':sessionScope.cust.getName()}</a></li>

						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--/header-middle-->

	<div class="header-bottom">
		<!--header-bottom-->
		<div class="container">
			<div class="row">
				<div class="col-sm-9">
					<div class="mainmenu pull-left">
						<ul class="nav navbar-nav collapse navbar-collapse">
							<li><a href="index.jsp" class="active">Home</a></li>
							<li class="dropdown"><a href="#">Project<i
									class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu" >
									<li><a href="#/newproject" ng-click="hideMe()">Add a Project</a></li>
									<li><a href="#/update">Update Project</a></li>
									<li><a href="#/remove">Remove Project</a></li>
									<li><a href="#/view">View Project</a></li>
								</ul>
							</li>
							<li class="dropdown"><a href="#">PortFolio<i class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu">
									<li><a href="#/portfolio">View Project PortFolio</a></li>
									<li><a href="#/addproj">Add project to PortFolio</a></li>
								</ul></li>
							<li class="dropdown"><a href="#">Project Events<i class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu">
									<li><a href="#/event">Add an Event </a></li>
									<li><a href="#/response">Post a response</a></li>
								</ul></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--/header-bottom--> </header>
	<!--/header-->