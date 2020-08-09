import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import Description from './components/Description/Description';
import useStyles from './styles.js';

const alanKey = '58a8f95f7aae05697cba90834a8114852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setnewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setnewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    });
  }, []);
  return (
    <div>
      <h1 className='title'>Voice Recognition for News App</h1>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

      {!newsArticles.length ? (
        <div className={classes.description}>
          <Description />
        </div>
      ) : null}
    </div>
  );
};

export default App;
