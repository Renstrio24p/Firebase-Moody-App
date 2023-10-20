
export default async function Start(DOM) {

    const stylesModule = await import('./assets/sass/modules/app.module.scss');
    const styles = stylesModule.default;
  
    DOM.innerHTML = `
        <div>
            <div id='auths'></div>
        </div>
    `;
  
    const { default: Render } = await import('./assets/render/Render');
    Render();
  }
  