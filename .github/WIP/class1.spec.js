describe('Load demo1 deck', () => {

  it.only('load demo deck flags data', () => {
    // cy.pause();
    // eslint-disable-next-line max-len
    const url = 'https://api.github.com/repos/opike/github-actions-test/dispatches';
    const githubToken = '2393e40fd9fc8314c96bfd2350d0948d3ab287b0';

    const url2 = 'https://api.github.com/users/defunkt';

    const url3 = 'https://api.github.com/repos/twbs/bootstrap';

    const url4 = 'https://api.github.com/repos/opike/github-actions-test';

    // cy.request({
    //   method: 'GET',
    //   url: url4
    // });

    cy.request({
      method: 'POST',
      url: url,
      headers: {
        'Authorization': 'token ' + githubToken,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'},
      body: {
        'event_type': 'build',
        'client_payload': {
          'env': 'production'
        }
      }
      // body: JSON.parse(body)
    });
  });
});
