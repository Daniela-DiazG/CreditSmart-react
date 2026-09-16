# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      ## CreditSmart React

      Aplicación web académica para consultar productos de crédito, filtrar opciones y enviar una solicitud simulada. El proyecto está construido con React, TypeScript, Vite y React Router.

      > La aplicación es una maqueta funcional. No envía información a un servidor ni procesa solicitudes reales.

      ## Requisitos

      - Node.js 18 o superior
      - npm

      ## Instalación

      Desde la carpeta del proyecto:

      ```bash
      npm install
      ```

      ## Comandos disponibles

      ```bash
      # Iniciar el servidor de desarrollo
      npm run dev

      # Crear la versión de producción
      npm run build

      # Revisar el código con ESLint
      npm run lint

      # Previsualizar la versión compilada
      npm run preview
      ```

      Después de ejecutar `npm run dev`, Vite mostrará la dirección local de la aplicación, normalmente `http://localhost:5173`.

      ## Rutas

      | Ruta | Descripción |
      | --- | --- |
      | `/` | Catálogo de los cinco productos de crédito. |
      | `/simulador` | Buscador y filtros por nombre, rango de monto y plazo. |
      | `/solicitar` | Formulario de solicitud con validación, limpieza y confirmación visual. |

      ## Funcionalidades

      ### Catálogo

      - Presenta créditos de libre inversión, vehículo, vivienda, educativo y empresarial.
      - Muestra monto, plazo, tasa y requisitos principales.
      - Permite navegar al simulador o al formulario de solicitud.

      ### Simulador

      - Filtra productos mientras se escribe el nombre.
      - Filtra por rangos de monto:
        - Hasta `$20.000.000`.
        - Entre `$20.000.001` y `$100.000.000`.
        - Más de `$100.000.000`.
      - Filtra por plazo deseado.
      - Actualiza el contador de resultados y muestra un estado vacío cuando no hay coincidencias.
      - Permite restablecer todos los filtros.

      ### Solicitud

      - Organiza el formulario en datos personales, datos del crédito y datos laborales.
      - Valida los campos obligatorios y el formato del correo electrónico.
      - Permite limpiar el formulario.
      - Muestra un toast de confirmación al enviar o limpiar la información.

      ## Estructura del proyecto

      ```text
      src/
      ├── components/       # Componentes reutilizables de la interfaz
      │   ├── CreditCard.tsx
      │   ├── FormSection.tsx
      │   ├── Icons.tsx
      │   ├── Navbar.tsx
      │   ├── RateDial.tsx
      │   ├── RequestForm.tsx
      │   ├── RequestSummary.tsx
      │   ├── SimulatorFilters.tsx
      │   ├── SimulatorResults.tsx
      │   └── Toast.tsx
      ├── data/
      │   └── credits.ts     # Datos tipados de los productos
      ├── pages/
      │   ├── HomePage.tsx
      │   ├── RequestPage.tsx
      │   └── SimulatorPage.tsx
      ├── App.tsx            # Router y composición general
      ├── index.css          # Estilos globales y responsive
      └── main.tsx           # Punto de entrada de React
      ```

      ## Tecnologías

      - React 19
      - TypeScript
      - Vite
      - React Router DOM
      - ESLint

      ## Hooks utilizados

      - `useState`: controla filtros, formulario, menú responsive y toast.
      - `useMemo`: calcula los resultados filtrados del simulador.
      - `useRef`: valida el formulario de solicitud mediante la referencia del elemento HTML.

      ## Estado del proyecto

      Este proyecto corresponde a una implementación React del sitio académico CreditSmart. Los datos de crédito son estáticos y están definidos en `src/data/credits.ts`.
