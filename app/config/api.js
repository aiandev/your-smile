const config = require('./config.json')

export default {
  map: `<iframe style="margin: 0; padding: 0;" width="100%" height="100%" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=${config.address}&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`,
}
