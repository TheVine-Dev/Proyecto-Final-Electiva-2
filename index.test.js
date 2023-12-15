// index.test.js

describe('Testing the Final Project', () => {
    test('should pass', () => {
      if (typeof document !== 'undefined') {
        const body = document.createElement('body');
        const h1 = document.createElement('h1');
        h1.textContent = 'Proyecto Final';
        body.appendChild(h1);

        expect(document.body.textContent).toContain('Proyecto Final');
      }
      
      else if(typeof document !== 'undefined'){
            const body2 = document.createElement('body');
            const h2 = document.createElement('h2')
            h2.textContent = '2019-8168';
            body2.appendChild(h2);

            expect(document.body2.textContent).toContain('2019-8168');
        
      } else {
        
        console.warn('No se pudo acceder al objeto document. Asegúrate de que estás ejecutando en un entorno adecuado.');
      }
    });
  });