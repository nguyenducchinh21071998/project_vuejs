<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel + Vuejs</title>

   {{--  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> --}}
    <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
	<link href="/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
	<link href="/css/sb-admin.css" rel="stylesheet">
	<link href="https://unpkg.com/vue-on-toast/dist/vue-on-toast.min.css" rel="stylesheet" type="text/css">

	{{-- <style type="text/css">
		/*.nav-link{
			;
		}*/
	</style> --}}
</head>
<body>
    {{-- <div class="container"> --}}
    <div id="app"></div>
    {{-- </div> --}}
    <script src="/js/app.js"></script>
    <!-- Bootstrap core JavaScript-->
	<script src="/vendor/jquery/jquery.min.js"></script>
	<script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Core plugin JavaScript-->
	<script src="/vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Page level plugin JavaScript-->
	<script src="/vendor/chart.js/Chart.min.js"></script>
	<script src="/vendor/datatables/jquery.dataTables.js"></script>
	<script src="/vendor/datatables/dataTables.bootstrap4.js"></script>

	<!-- Custom scripts for all pages-->
	<script src="/js/sb-admin.min.js"></script>

	<!-- Demo scripts for this page-->
	<script src="/js/demo/datatables-demo.js"></script>
	<script src="/js/demo/chart-area-demo.js"></script>
	<script src="https://unpkg.com/vue/dist/vue.js"></script>
	<script src="https://unpkg.com/vue-on-toast/dist/vue-on-toast.min.js"></script>

</body>
</html>