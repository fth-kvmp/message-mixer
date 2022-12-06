// Sample script that should return a random message every time its run
// Im not sure i understood the project correctly but guess the script return everytime a random sentence so...


// proverbs i found on https://preply.com/en/blog/popular-english-proverbs/
// made a little script to get the proverbs as a string
let proverbs = "1. Many hands make light work2. Strike while the iron is hot3. Honesty is the best policy4. The grass is always greener on the other side of the fence5. Don't judge abook by its cover6. An apple a day keeps the doctor away7. Better late than never8. Don't bite the hand that feeds you9. Rome wasn't built in a day10. Actions speak louder than words11. It's no use crying over spilled milk12. Still waters run deep13. Curiosity killed the cat14. My hands are tied15. Out of sight, out of mind16. Easy come, easy go17. You can't make an omelette without breaking a few eggs18. The forbidden fruit is always the sweetest19. If you scratch my back, I'll scratch yours20. It's the tip of the iceberg21. Learn to walk before you run22. First things first23. Don't bite off more than you can chew24. It's better to be safe than sorry25. The early bird catches the worm26. Don't make a mountain out of an anthill (or molehill)27. Where there's a will, there's a way28. Always put your best foot forward29. The squeaky wheel gets the grease30. A rolling stone gathers no moss"
proverbs = proverbs.replace(/[0-9]+/g, '')

// convert it to an array
const arrayedProverbs = proverbs.split('. ')
const persons = ['child', 'boy', 'girl', 'daughter', 'son', 'father', 'mother']
const closure = ['Have a good day', 'Spread wisdom', 'Spread love', 'Help me', 'Wish you good luck', 'Take care']

if(arguments[0]){
    console.log('there is an arg')
}
console.log(`You should tell to your ${persons[Math.floor(Math.random() * persons.length)]}. ${arrayedProverbs[Math.floor(Math.random() * arrayedProverbs.length)]}. ${closure[Math.floor(Math.random() * closure.length)]}.`)