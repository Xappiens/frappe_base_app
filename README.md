# Frappe Base App - Portal de Educación ATU

Una aplicación base de Frappe que replica exactamente el portal público de Frappe CRM, adaptada para crear portales educativos.

## 🎯 Características

### Portal Web Completo
- **Réplica exacta del portal CRM**: Mismo diseño, sidebar, navbar y componentes
- **Componentes de Frappe UI**: Todos los componentes preconstruidos de frappe-ui
- **Sistema de permisos idéntico**: Autenticación y autorización como en CRM
- **Responsive design**: Funciona perfectamente en móvil y desktop

### Módulos Educativos
- **👥 Estudiantes**: Gestión completa de estudiantes
- **📚 Cursos**: Administración de cursos y programas educativos
- **🏆 Certificados**: Generación y gestión de certificados profesionales
- **🎓 Programas**: Programas educativos y especializaciones
- **👨‍🏫 Instructores**: Gestión del equipo docente
- **📝 Evaluaciones**: Sistema de exámenes y evaluaciones
- **📄 Plantillas**: Diseño de plantillas para certificados
- **📊 Reportes**: Analíticas y métricas educativas

## 🚀 Instalación

### Prerrequisitos
- Frappe Framework v15+
- Node.js 18+
- Python 3.10+

### Pasos de instalación

1. **Clonar la aplicación**
```bash
cd frappe-bench
bench get-app https://github.com/Xappiens/frappe_base_app.git
```

2. **Instalar en un sitio**
```bash
bench --site tu-sitio.com install-app professional_certificate_creation_tool
```

3. **Construir assets**
```bash
bench build
```

## 🛠️ Desarrollo

### Estructura del proyecto
```
professional_certificate_creation_tool/
├── package.json                    # Workspace setup
├── frontend/                       # Frontend Vue.js
│   ├── src/
│   │   ├── components/             # Componentes Vue
│   │   ├── pages/                  # Páginas del portal
│   │   ├── stores/                 # Pinia stores
│   │   └── utils/                  # Utilidades
│   ├── package.json               # Dependencias frontend
│   └── vite.config.js             # Configuración Vite
├── professional_certificate_creation_tool/
│   ├── www/                       # Portal web backend
│   │   ├── education.py           # Contexto y autenticación
│   │   └── education.html         # Template HTML
│   ├── public/frontend/           # Assets compilados
│   └── hooks.py                   # Configuración de la app
└── pyproject.toml                 # Configuración Python
```

### Comandos de desarrollo

```bash
# Desarrollo con hot reload
cd apps/professional_certificate_creation_tool
yarn dev

# Build para producción
yarn build

# Instalar dependencias
yarn install
```

### Personalización

#### Cambiar branding
1. Editar `frontend/src/components/UserDropdown.vue` para cambiar el logo y nombre
2. Modificar `frontend/index.html` para el título y favicon
3. Actualizar `professional_certificate_creation_tool/hooks.py` para metadatos

#### Agregar nuevos módulos
1. Crear páginas en `frontend/src/pages/`
2. Agregar rutas en `frontend/src/router.js`
3. Actualizar sidebar en `frontend/src/components/Layouts/AppSidebar.vue`

## 🎨 Tecnologías utilizadas

### Frontend
- **Vue.js 3**: Framework principal
- **Frappe UI**: Biblioteca de componentes
- **Tailwind CSS**: Estilos y diseño
- **Vite**: Build tool y dev server
- **Pinia**: State management
- **Vue Router**: Enrutamiento

### Backend
- **Frappe Framework**: Framework backend
- **Python**: Lógica del servidor
- **Jinja2**: Templates HTML

## 📱 Portal Web

El portal está disponible en: `https://tu-sitio.com/education`

### Características del portal
- **Autenticación**: Login/logout integrado con Frappe
- **Navegación**: Sidebar colapsible con todos los módulos
- **Responsive**: Funciona en móvil y desktop
- **Componentes**: Todos los componentes de Frappe UI disponibles

## 🔧 Configuración

### Rutas web
La aplicación configura automáticamente las rutas:
- `/education/*` → Portal principal
- Todas las subrutas son manejadas por Vue Router

### Permisos
El sistema de permisos es idéntico al de Frappe CRM:
- Autenticación requerida para acceder al portal
- Roles y permisos configurables desde Frappe desk
- Sesiones manejadas automáticamente

## 📄 Licencia

MIT License - Ver [LICENSE](license.txt) para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte y consultas:
- **Email**: xappiens@xappiens.com
- **GitHub Issues**: [Crear issue](https://github.com/Xappiens/frappe_base_app/issues)

---

**Desarrollado por [Xappiens](https://xappiens.com)** 🚀
