import React, { Component, useState } from 'react';
import Post from './Post';

function PostsList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'Rilton Franzone',
        avatar: 'https://avatars0.githubusercontent.com/u/58868651?s=460&v=4',
      },
      date: '04 Fev 2020',
      content: 'Essa é minha primeira postagem no Facebook!',
      comments: [
        {
          id: 1,
          author: {
            name: 'Diego Fernandes',
            avatar:
              'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
          },
          // eslint-disable-next-line prettier/prettier
           content: ' A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)', 
        },
      ],
    },
    {
      id: 2,
      author: {
        name: 'Raul Martins',
        avatar:
          'https://hotmart.s3.amazonaws.com/profile_pictures/5cf08ff4-880e-47f3-9184-0a4537dee296/IMG_20180820_101125_154.jpg',
      },
      date: '10 Fev 2020',
      // eslint-disable-next-line prettier/prettier
       content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
      comments: [
        {
          id: 1,
          author: {
            name: 'Arno Alcantra',
            avatar:
              'https://pbs.twimg.com/profile_images/1102586799585665024/64ZGs4QF_400x400.jpg',
          },
          // eslint-disable-next-line prettier/prettier
           content: 'Concordo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum doloremque, numquam ad sunt ullam debitis quo magni harum iusto officiis delectus rem maxime dignissimos velit nihil qui maiores minima!', 
        },
        {
          id: 2,
          author: {
            name: 'Flavio Pereira',
            avatar:
              'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/12/carlos-francisco-nadalim-418x235.jpg',
          },
          // eslint-disable-next-line prettier/prettier
           content: 'Concordo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum doloremque, numquam ad sunt ullam debitis quo magni harum iusto officiis delectus rem maxime dignissimos velit nihil qui maiores minima!', 
        },
      ],
    },
    {
      id: 3,
      author: {
        name: 'Rafael Falcon',
        avatar:
          'https://sophiaperennis.com.br/wp-content/uploads/2013/08/Rafael-Falcon.jpg',
      },
      date: '17 Jan 2020',
      // eslint-disable-next-line prettier/prettier
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda nesciunt ratione commodi id culpa qui repellat quod iusto necessitatibus! Illum suscipit magni, modi et nobis dicta eius ipsum quibusdam.',
      comments: [
        {
          id: 1,
          author: {
            name: 'Bernardo Kuster',
            avatar:
              'https://estudosnacionais.r.worldssl.net/wp-content/uploads/2019/11/bernardo.jpg',
          },
          // eslint-disable-next-line prettier/prettier
           content: 'Concordo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum doloremque, numquam ad sunt ullam debitis quo magni harum iusto officiis delectus rem maxime dignissimos velit nihil qui maiores minima!', 
        },
        {
          id: 2,
          author: {
            name: 'Antonio Carlos',
            avatar:
              'https://media.gazetadopovo.com.br/2019/03/02bbc0d63a5cb7ea3dd3a582c5d5bcda-gpMedium.jpg',
          },
          // eslint-disable-next-line prettier/prettier
           content: 'Concordo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum doloremque, numquam ad sunt ullam debitis quo magni harum iusto officiis delectus rem maxime dignissimos velit nihil qui maiores minima!', 
        },
      ],
    },
  ]);

  return posts.map(post => <Post post={post} />);
}

export default PostsList;
