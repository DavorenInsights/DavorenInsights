async function initEcosystem() {
  const response = await fetch('/data/ev-ecosystem.json');
  const data = await response.json();

  const cy = cytoscape({
    container: document.getElementById('cy'),

    elements: [
      ...data.nodes,
      ...data.edges
    ],

    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(label)',
          'text-wrap': 'wrap',
          'text-max-width': 120,
          'text-valign': 'center',
          'text-halign': 'center',
          'font-size': 11,
          'color': '#f5f7fa',
          'background-color': '#2f80ed',
          'width': 70,
          'height': 70,
          'border-width': 2,
          'border-color': '#dbe7ff'
        }
      },
      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          'width': 2,
          'line-color': '#7a8699',
          'target-arrow-color': '#7a8699',
          'target-arrow-shape': 'triangle',
          'arrow-scale': 0.9,
          'label': 'data(label)',
          'font-size': 9,
          'color': '#c8d1dc',
          'text-background-color': '#0f1115',
          'text-background-opacity': 1,
          'text-background-padding': 2
        }
      },
      {
        selector: '.selected',
        style: {
          'background-color': '#00c2a8',
          'border-color': '#bff7ea',
          'border-width': 4
        }
      }
    ],

    layout: {
      name: 'cose',
      animate: true,
      fit: true,
      padding: 30
    }
  });

  const panel = document.getElementById('info-panel');

  cy.on('tap', 'node', (evt) => {
    cy.nodes().removeClass('selected');

    const node = evt.target;
    node.addClass('selected');

    const d = node.data();

    const issuesHtml = (d.issues || [])
      .map(issue => `<li>${issue}</li>`)
      .join('');

    const depsHtml = (d.dependencies || [])
      .map(dep => `<li>${dep}</li>`)
      .join('');

    panel.innerHTML = `
      <h2>${d.label}</h2>
      <p>${d.summary || ''}</p>

      <h3>Key issues</h3>
      <ul>${issuesHtml || '<li>No issues added yet.</li>'}</ul>

      <h3>Dependencies</h3>
      <ul>${depsHtml || '<li>No dependencies added yet.</li>'}</ul>

      <p><strong>Status:</strong> ${d.status || 'Not set'}</p>

      <div class="panel-links">
        ${d.essay_url ? `<a href="${d.essay_url}">Read deeper analysis</a>` : ''}
        ${d.signal_url ? `<a href="${d.signal_url}">Related signal</a>` : ''}
      </div>
    `;
  });
}

initEcosystem().catch(error => {
  console.error('Failed to load EV ecosystem map:', error);
});
