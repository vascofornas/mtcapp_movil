interface Actividad{
	id;
	titulo:string;
	imagen:string;
	fecha_inicio:string;
	fecha_fin:string;
	organizacion_nombre:string;
	dia?;
	mes?;
	hora_minutos?;
	descripcion?;
	anio?;
	latitud?;
	longitud?;
	email?;
	telefono?;
	website?;
}

export default Actividad;
