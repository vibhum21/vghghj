<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
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
				<!-- <div class="col-sm-8"> 
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
			</div>-->
		</div>
	</div>
	<!--/header-middle-->

	<div class="header-bottom">
		<!--header-bottom-->
		<div class="container">
			<div class="row">
				<div class="col-sm-9">
					<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
					</div>
					<div class="mainmenu pull-left">
						<ul class="nav navbar-nav collapse navbar-collapse">
							<li><a href="index.jsp" class="active">Home</a></li>
							<li class="dropdown"><a href="#">Project<i
									class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu" >
									<li><a href="#/newproject">Add a Project</a></li>
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
								</ul>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--/header-bottom--> </header>
	<!--/header-->