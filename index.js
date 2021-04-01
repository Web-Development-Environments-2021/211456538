const AWAITING_TIME_MESSAGE = 14000;
const aboutMeTextElement = document.getElementById("aboutMeText");
const rememberElement = document.getElementById("remember");
const numberOfLikesElement = document.getElementById("numberOfLikes");
// let numberOfLikes = 120;
const message = [
    'לחברים, פעם אחת הייתי סטנד ביי, התרוצצתי בטרמינל ואז קריאה ״אהרוני למודיעין״. עליתי לטיסת קויקי ללונדון, הייתי חייב אז באימון. לקצר את הסיפור, המשכתי לניו יורק, בחזרה הביתה הייתי על הישירה שהביאה חלקים לג׳מבו שפגע בבית הנתיבות באורלי, קפטן וונס. שם ירדנו ואז הופיע ברוך אלפיה בקולו העמוק ״אהרוני אתה יורד״... במלון היו הרבה מאבטחים ודרך ז’נבה חזרתי עם סוויס הביתה אחרי שמונה ימים!!  אמי מטבע הדברים דאגה מאד אבל לא העזה להתקשר, לאן? אני באתי בטענות אל ברוך איך לא הודעת להורים? ברוך שלף את החיוך הרחב שהיה שמור עמו למצבים כאלה: ״אהרוני יקירי, אתה חושב שהיה לי מושג איפה אתה״??? חיבוק גדול לאיש!!!',
    'אני זוכר שהתלבטתי האם לקחת משכנתא בסוף שנות השבעים,חששתי שלא תהיה לי מספיק עבודה על מנת לשלם את החוזה החודשי,  התייעצתי עם ברוך מה לעשות, הוא השיב לי לי בבטחה אין בעיה תחתום!. מיותר לציין שהיו לי ותר שעות באוויר מאשר על הקרקע, במסגרת חוזה שחתמנו בזמנו כ-20 איש לשלוש שנים, היה איש משכמו ומעלה, יהיה זכרו ברוך',
    'ברוך בשבילי צרוב בחיוך שלו. אין פעם שלא הגעתי למשגרה ולא שאל מה שלומך? חיוך ענק ומבכל הלב!  לא אשכח לעולם שהתקשר אלי לטיסה לסימפרופול,שאלתי אלתי ברוך איפה זה? הוא ענה אי ביוון והשאר היסטוריה. מי יכול לכעוס על אבא ! יהיה זכרו ברוך',
]


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function startTextChange(){
    let i = 0;
    while (true){
        aboutMeTextElement.style.opacity = 0;
        await sleep(500);
        aboutMeTextElement.style.opacity = 1;
        if(i === message.length){ i = 0;}
        aboutMeTextElement.innerHTML = message[i];
        await sleep(AWAITING_TIME_MESSAGE);
        i++;
    }
}


startTextChange();

