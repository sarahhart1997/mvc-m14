const { Post } = require('../models');

const postdata = [
  {
    title: 'Technical Topic Here',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Conversation on data structures',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Let us learn',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'This is an example of filler text',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'This is an example of filler text',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'This is an example of filler text. Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'This is an example of filler textHere is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Here is some fun profound things I have to say about this top in a variety of different examples. This is filler text so that formatting can look nice.java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
