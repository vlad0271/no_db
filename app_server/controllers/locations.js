module.exports.homelist = function(req, res, next) {
  res.render('locations-list', {
    header: 'Find place for good Wi-Fi',
    loctexts: [
    {
      name: 'Taganka',
      facils: ['Hot drinks', 'Food', 'Premium'],
      adres: 'Марскисткая, 5'
    },
    {
      name: 'Kitay',
      facils: ['Hot drinks', ' No Food', 'Simple'],
      adres: 'Лубянка, 7'
    },
    {
      name: 'Proletarka',
      facils: ['Cold drinks', 'No Food', 'Good'],
      adres: 'Волгоградский проспект, 4'
    }],
    lefttext: 'Слева список мест с указанием необходимых параметров и отправкой отзыва при наличии'
    });
};

module.exports.locationInfo = function(req, res, next) {
  res.render('locations-info', { title: 'Location Info' });
};

module.exports.addReview = function(req, res, next) {
  res.render('locations-review-form', { title: 'Add review' });
};