import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {
  /*Cambiar titulo */
  @Input() title!: String
  @Input() detalle!: String

  @Output() cambioTitle = new EventEmitter<String>()
  @Output() cambioDetalle = new EventEmitter<String>()

  cambiarTitle() {
    this.title = '¿ Que es Angular ?'
    this.cambioTitle.emit(this.title)

    this.detalle = 'Con Angular, está aprovechando una plataforma que puede escalar desde proyectos de un solo desarrollador hasta aplicaciones de nivel empresarial. Angular está diseñado para que la actualización sea lo más sencilla posible, así que aproveche los últimos desarrollos con el mínimo esfuerzo. Lo mejor de todo es que el ecosistema de Angular consta de un grupo diverso de más de 1,7 millones de desarrolladores, autores de bibliotecas y creadores de contenido.'
    this.cambioDetalle.emit(this.detalle)
  } 
  
  /*Cambiar titulo 1*/
  @Input() title1!: String
  @Input() detalle1!: String

  @Output() cambioTitle1 = new EventEmitter<String>()
  @Output() cambioDetalle1 = new EventEmitter<String>()

  cambiarTitle1() {
    this.title1 = 'Configuración del entorno local y del espacio de trabajo'
    this.cambioTitle.emit(this.title1)

    this.detalle1 = 'Esta guía explica cómo configurar su entorno para el desarrollo de Angular mediante la herramienta Angular CLI . Incluye información sobre los requisitos previos, la instalación de la CLI, la creación de un espacio de trabajo inicial y una aplicación de inicio, y la ejecución de esa aplicación localmente para verificar su configuración.'
    this.cambioDetalle.emit(this.detalle1)
  }
  /*Cambiar titulo 2*/
  @Input() title2!: String
  @Input() detalle2!: String

  @Output() cambioTitle2 = new EventEmitter<String>()
  @Output() cambioDetalle2 = new EventEmitter<String>()

  cambiarTitle2() {
    this.title2 = 'Introducción a los documentos de Angular'
    this.cambioTitle.emit(this.title2)

    this.detalle2 = 'Angular es un marco de diseño de aplicaciones y una plataforma de desarrollo para crear aplicaciones de una sola página eficientes y sofisticadas. Estos documentos de Angular lo ayudan a aprender y usar el marco y la plataforma de desarrollo de Angular, desde su primera aplicación hasta la optimización de aplicaciones complejas de una sola página para empresas. Los tutoriales y las guías incluyen ejemplos descargables para ayudarlo a comenzar sus proyectos.'
    this.cambioDetalle.emit(this.detalle2)
  }
  /*Cambiar titulo 3*/
  @Input() title3!: String
  @Input() detalle3!: String

  @Output() cambioTitle3= new EventEmitter<String>()
  @Output() cambioDetalle3 = new EventEmitter<String>()

  cambiarTitle3() {
    this.title3 = 'Comprender las plantillas'
    this.cambioTitle.emit(this.title3)

    this.detalle3 = 'En Angular, una plantilla es un modelo para un fragmento de una interfaz de usuario (UI). Las plantillas están escritas en HTML y se puede usar una sintaxis especial dentro de una plantilla para desarrollar muchas de las características de Angular'
    this.cambioDetalle.emit(this.detalle3)
  }
  /*Cambiar titulo 4*/
  @Input() title4!: String
  @Input() detalle4!: String

  @Output() cambioTitle4 = new EventEmitter<String>()
  @Output() cambioDetalle4 = new EventEmitter<String>()

  cambiarTitle4() {
    this.title4 = 'Guía de contribuyentes de documentación'
    this.cambioTitle.emit(this.title4)

    this.detalle4 = 'Los temas de esta sección describen cómo puede contribuir a esta documentación. Para obtener información sobre cómo contribuir con código al marco Angular, consulte Contribuyendo a Angular. Angular es un proyecto de código abierto que agradece el apoyo de la comunidad, especialmente en lo que respecta a la documentación'
    this.cambioDetalle.emit(this.detalle4)
  }
}
