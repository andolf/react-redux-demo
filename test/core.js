import { ReactSelector, waitForReact } from 'testcafe-react-selectors';

fixture('Open page')
  .page('http://localhost:3000/about')
  .beforeEach(async () => {
    await waitForReact();
  });

test('Read text on about page', async t => {
  const About = ReactSelector('About');
  const header = About.find('h2');

  await t.expect(header.innerText).eql('About', 'Title should say "About"');
});
