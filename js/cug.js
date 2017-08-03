/**
 * Created by xudas on 2017/7/15.
 */

var id = document.getElementsByName('lt')[0]['value']
var loginHead = `
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/htmleaf-demo.css">
	<style type="text/css">
		.form-bg{
            margin-top: 100px;
		}
		.form-horizontal{
		    background: #fff;
		    padding-bottom: 40px;
		    border-radius: 15px;
		    text-align: center;
		}
		.form-horizontal .heading{
		    display: block;
		    font-size: 35px;
		    font-weight: 700;
		    padding: 35px 0;
		    border-bottom: 1px solid #f0f0f0;
		    margin-bottom: 30px;
		}
		.form-horizontal .form-group{
		    padding: 0 40px;
		    margin: 0 0 25px 0;
		    position: relative;
		}
		.form-horizontal .form-control{
		    background: #f0f0f0;
		    border: none;
		    border-radius: 20px;
		    box-shadow: none;
		    padding: 0 20px 0 45px;
		    height: 40px;
		    transition: all 0.3s ease 0s;
		}
		.form-horizontal .form-control:focus{
		    background: #e0e0e0;
		    box-shadow: none;
		    outline: 0 none;
		}
		.form-horizontal .form-group i{
		    position: absolute;
		    top: 12px;
		    left: 60px;
		    font-size: 17px;
		    color: #c8c8c8;
		    transition : all 0.5s ease 0s;
		}
		.form-horizontal .form-control:focus + i{
		    color: #00b4ef;
		}
		.form-horizontal .fa-question-circle{
		    display: inline-block;
		    position: absolute;
		    top: 12px;
		    right: 60px;
		    font-size: 20px;
		    color: #808080;
		    transition: all 0.5s ease 0s;
		}
		.form-horizontal .fa-question-circle:hover{
		    color: #000;
		}
		.form-horizontal .main-checkbox{
		    float: left;
		    width: 20px;
		    height: 20px;
		    background: #11a3fc;
		    border-radius: 50%;
		    position: relative;
		    margin: 5px 0 0 5px;
		    border: 1px solid #11a3fc;
		}
		.form-horizontal .main-checkbox label{
		    width: 20px;
		    height: 20px;
		    position: absolute;
		    top: 0;
		    left: 0;
		    cursor: pointer;
		}
		.form-horizontal .main-checkbox label:after{
		    content: "";
		    width: 10px;
		    height: 5px;
		    position: absolute;
		    top: 5px;
		    left: 4px;
		    border: 3px solid #fff;
		    border-top: none;
		    border-right: none;
		    background: transparent;
		    opacity: 0;
		    -webkit-transform: rotate(-45deg);
		    transform: rotate(-45deg);
		}
		.form-horizontal .main-checkbox input[type=checkbox]{
		    visibility: hidden;
		}
		.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{
		    opacity: 1;
		}
		.form-horizontal .text{
		    float: left;
		    margin-left: 7px;
		    line-height: 20px;
		    padding-top: 5px;
		    text-transform: capitalize;
		}
		.form-horizontal .btn{
		    float: right;
		    font-size: 14px;
		    color: #fff;
		    background: #00b4ef;
		    border-radius: 30px;
		    padding: 10px 25px;
		    border: none;
		    text-transform: capitalize;
		    transition: all 0.5s ease 0s;
		}
		@media only screen and (max-width: 479px){
		    .form-horizontal .form-group{
		        padding: 0 25px;
		    }
		    .form-horizontal .form-group i{
		        left: 45px;
		    }
		    .form-horizontal .btn{
		        padding: 10px 20px;
		    }
		}
		@font-face {
	font-family: 'icomoon';
	src:url('../fonts/icomoon.eot?rretjt');
	src:url('../fonts/icomoon.eot?#iefixrretjt') format('embedded-opentype'),
		url('../fonts/icomoon.woff?rretjt') format('woff'),
		url('../fonts/icomoon.ttf?rretjt') format('truetype'),
		url('../fonts/icomoon.svg?rretjt#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
	font-family: 'icomoon';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body, html { font-size: 100%; 	padding: 0; margin: 0;}

/* Reset */
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

body{
	background: #494A5F;
	color: #D5D6E2;
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif;
}
a{ color: rgba(255, 255, 255, 0.6);outline: none;text-decoration: none;-webkit-transition: 0.2s;transition: 0.2s;}
a:hover,a:focus{color:#74777b;text-decoration: none;}
.htmleaf-container{
	margin: 0 auto;
}

.bgcolor-1 { background: #f0efee; }
.bgcolor-2 { background: #f9f9f9; }
.bgcolor-3 { background: #e8e8e8; }/*light grey*/
.bgcolor-4 { background: #2f3238; color: #fff; }/*Dark grey*/
.bgcolor-5 { background: #df6659; color: #521e18; }/*pink1*/
.bgcolor-6 { background: #2fa8ec; }/*sky blue*/
.bgcolor-7 { background: #d0d6d6; }/*White tea*/
.bgcolor-8 { background: #3d4444; color: #fff; }/*Dark grey2*/
.bgcolor-9 { background: #ef3f52; color: #fff;}/*pink2*/
.bgcolor-10{ background: #64448f; color: #fff;}/*Violet*/
.bgcolor-11{ background: #3755ad; color: #fff;}/*dark blue*/
.bgcolor-12{ background: #3498DB; color: #fff;}/*light blue*/
.bgcolor-20{ background: #494A5F;color: #D5D6E2;}
/* Header */
.htmleaf-header{
	padding: 1em 190px 1em;
	letter-spacing: -1px;
	text-align: center;
	background: #66677c;
}
.htmleaf-header h1 {
	color: #D5D6E2;
	font-weight: 600;
	font-size: 2em;
	line-height: 1;
	margin-bottom: 0;
}
.htmleaf-header h1 span {
	display: block;
	font-size: 60%;
	font-weight: 400;
	padding: 0.8em 0 0.5em 0;
	color: #c3c8cd;
}
/*nav*/
.htmleaf-demo a{color: #fff;text-decoration: none;}
.htmleaf-demo{width: 100%;padding-bottom: 1.2em;}
.htmleaf-demo a{display: inline-block;margin: 0.5em;padding: 0.6em 1em;border: 3px solid #fff;font-weight: 700;}
.htmleaf-demo a:hover{opacity: 0.6;}
.htmleaf-demo a.current{background:#1d7db1;color: #fff; }
/* Top Navigation Style */
.htmleaf-links {
	position: relative;
	display: inline-block;
	white-space: nowrap;
	font-size: 1.5em;
	text-align: center;
}

.htmleaf-links::after {
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -1px;
	width: 2px;
	height: 100%;
	background: #dbdbdb;
	content: '';
	-webkit-transform: rotate3d(0,0,1,22.5deg);
	transform: rotate3d(0,0,1,22.5deg);
}

.htmleaf-icon {
	display: inline-block;
	margin: 0.5em;
	padding: 0em 0;
	width: 1.5em;
	text-decoration: none;
}

.htmleaf-icon span {
	display: none;
}

.htmleaf-icon:before {
	margin: 0 5px;
	text-transform: none;
	font-weight: normal;
	font-style: normal;
	font-variant: normal;
	font-family: 'icomoon';
	line-height: 1;
	speak: none;
	-webkit-font-smoothing: antialiased;
}
/* footer */
.htmleaf-footer{width: 100%;padding-top: 10px;}
.htmleaf-small{font-size: 0.8em;}
.center{text-align: center;}
/****/
.related {
	color: #fff;
	background: #494A5F;
	text-align: center;
	font-size: 1.25em;
	padding: 0.5em 0;
	overflow: hidden;
}

.related > a {
	vertical-align: top;
	width: calc(100% - 20px);
	max-width: 340px;
	display: inline-block;
	text-align: center;
	margin: 20px 10px;
	padding: 25px;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}
.related a {
	display: inline-block;
	text-align: left;
	margin: 20px auto;
	padding: 10px 20px;
	opacity: 0.8;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
	-webkit-backface-visibility: hidden;
}

.related a:hover,
.related a:active {
	opacity: 1;
}

.related a img {
	max-width: 100%;
	opacity: 0.8;
	border-radius: 4px;
}
.related a:hover img,
.related a:active img {
	opacity: 1;
}
.related h3{font-family: "Microsoft YaHei", sans-serif;font-size: 1.2em}
.related a h3 {
	font-size: 0.85em;
	font-weight: 300;
	margin-top: 0.15em;
	color: #fff;
}
/* icomoon */
.icon-htmleaf-home-outline:before {
	content: "\e5000";
}

.icon-htmleaf-arrow-forward-outline:before {
	content: "\e5001";
}

@media screen and (max-width: 1024px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1.4em;
    }
    .htmleaf-links{font-size: 1.4em}
}

@media screen and (max-width: 960px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1.2em;
    }
    .htmleaf-links{font-size: 1.2em}
    .related h3{font-size: 1em;}
	.related a h3 {
		font-size: 0.8em;
	}
}

@media screen and (max-width: 766px) {
	.htmleaf-header h1 {
        font-size:1.3em;
    }
    .htmleaf-links{font-size: 1.3em}
}

@media screen and (max-width: 640px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1em;
    }
    .htmleaf-links{font-size: 1em}
    .related h3{font-size: 0.8em;}
	.related a h3 {
		font-size: 0.6em;
	}
}
	</style>
	<!--[if IE]>
		<script src="http://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->`
var loginHtml = `

<body>
		<div class="demo form-bg" style="padding: 20px 0;">
		        <div class="container">
		            <div class="row">
		                <div class="col-md-offset-3 col-md-6">
		                    <form class="form-horizontal">
		                        <span class="heading">中国地质大学信息门户</span>
		                        <div class="form-group">
		                            <input type="text" class="form-control" placeholder="学  号" name="username" tabindex="1" onkeypress="if(event.keyCode==13){document.getElementById('password').focus(); return false;}" accesskey="n" type="text" value="" autocomplete="false">
                                    <i class="fa fa-user"></i>
		                        </div>
		                        <div class="form-group help">
		                            <input type="password" class="form-control" placeholder="密　码" id="password" name="password"  tabindex="2" onkeyup="runPassword1(this.value, 'mypassword','mmqd');" accesskey="p" type="password" value="" autocomplete="off">
		                            <i class="fa fa-lock"></i>
		                            <a href="#" class="fa fa-question-circle"></a>
		                        </div>
                                <div class="form-group">
                                    <div class="main-checkbox">
                                        <input type="checkbox" id="checkbox1" name="rememberMe" id="rememberMe" value="true" tabindex="4">
                                        <label for="checkbox1"></label>
                                    </div>
                                    <span class="text">两周内不用再登录</span>
		                            <button type="submit" class="btn btn-default">登录</button>
		                        </div>
			<input type="hidden" name="lt" value="_cEEC05AAC-B400-17CA-9461-41BFD01D709A_k70D56AF9-46DA-D177-612D-E1A4EBBC4486">
			<input type="hidden" name="_eventId" value="submit">
		                    </form>
		                </div>
		            </div>
		        </div>
		    </div>

</body>`
document.head.innerHTML += loginHead
document.body.outerHTML = loginHtml;
document.getElementsByName('lt')[0]['value'] = id
//document.getElementById('password').value = user['password'];
//document.getElementsByName('submit1').item(0).click()
