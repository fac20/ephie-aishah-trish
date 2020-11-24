exports.data = {
  layout: 'base',
  title: 'Cohort',
};

exports.render = (data) => {
  const posts = data.collections.cohort;
  let postItems = '';
  for (let post of posts) {
    postItems += `<li>
    <div class="cards">
    <img src="${post.data.src}"  />
    <a href="${post.url}">${post.data.title}</a>
    </div>
    </li>`;
  }
  return `
        <h1>COHORT</h1>
        <ul>
            ${postItems}
        </ul>
    `;
};
