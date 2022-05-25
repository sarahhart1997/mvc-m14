const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'You are amazing!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Feeling so inspired',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'This is the future of tech',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Thanks so much for trying this out',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Great work',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'This is beautiful',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Could not agree more',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Example of comment here',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Running out of ideas of seeds',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Hmmmm coming up with seed comments is hard',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Example Comment Here',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Example Comment Here 3',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Example Comment Here 4',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Example Comment Here 5',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Example Comment Here 7',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Example Comment Here 8',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Example Comment Here 9',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Example Comment Here 10',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Example Comment Here 11',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'You are a star',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Total inspiration to all of us',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Keep up the excellent work',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Testing Example here',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
