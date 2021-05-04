var method = 1;
var sum = 0;
const alef = 1488;
const beit = 1489;
const gimel = 1490;
const dalet = 1491
const hey = 1492;
const vav = 1493;
const zain = 1494;
const het = 1495;
const tet = 1496;
const yud = 1497;
const chaf = 1499;
const lamed = 1500;
const mem = 1502;
const nun = 1504;
const sameche = 1505;
const ayin = 1506;
const pey = 1508;
const tzadik = 1510;
const kuf = 1511;
const reish = 1512;
const shin = 1513;
const taf = 1514;

// ending letters
const chafSofit = 1498;
const memSofit = 1501;
const nunSofit = 1503;
const peySofit = 1507;
const tzadikSofit = 1509;

// Calculation method
const regular = 1;
const bigNum = 2;
const smallNum = 3;
const sequential = 4;
const atBash = 5;
const frontedNum = 6;
const privateNum = 7;
const shemiNum = 8;

var methodExpTitleH2Element;
var methodExpSpanElement;
const lettersArr = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת', 'ך','ם','ן','ף','ץ'];


function switchGimatryMethod(selectedMethod, valWords) {
  var str = String.selectedMethod;
  method = selectedMethod === "regular" ? 1 : selectedMethod === "bigNum" ? 2 : selectedMethod === "smallNum" ? 3 : selectedMethod === "sequential" ? 4 : selectedMethod === "atBash" ? 5 : selectedMethod === "frontedNum" ? 6 : selectedMethod === "privateNum" ? 7 : 8;

  showGimatryVal(valWords, false);
  methodExpTitleH2Element = document.getElementById("expTitle");
  methodExpSpanElement = document.getElementById("explainSpan");
  switch (method) {
    case regular:
      methodExpTitleH2Element.innerHTML = "השיטה הרגילה:";
      methodExpSpanElement.innerHTML = "השיטה הרגילה (הסטנדרטית) ערכי האותיות כספרות עבריות בסדר עולה.";
      break;
    case bigNum:
      methodExpTitleH2Element.innerHTML = "מספר גדול (מנצפ\"ך):";
      methodExpSpanElement.innerHTML = "ערכי האותיות זהים לשיטה הרגילה פרט לאותיות הסופיות ם\' ן\' ץ\' ף\' ך\' אשר במקום לקבל את ערכי האותיות הלא סופיות מקבלות (ערך נפרד) את הערכים הממשיכים אחרי האות ת\' (= 400) כך ש- ם\' (= 500) ן (= 600) ץ\' (= 700) ף\' (= 800) ך\' (= 900).";
      break;
    case smallNum:
      methodExpTitleH2Element.innerHTML = "מספר קטן (גימטריה קטנה):";
      methodExpSpanElement.innerHTML = "חישוב האותיות אינו לפי סדר עולה לכל האלף-בית, אלא במחזור עולה של מ- 1 עד 9, כך שערכן של האותיות א\'-ט\' (1-9) י\'-צ\' (1-9) ק\'-ץ,' (1-9).";
      break;
    case sequential:
      methodExpTitleH2Element.innerHTML = "השיטה הרגילה:";
      methodExpSpanElement.innerHTML = "בשיטה זו כל אות מקבלת את הערך של האות הקודמת לה + 1, כלומר ערכה של האות כ\' יהיה שווה לערכה של האות י\' (10) + 1 כך ש- כ\' = 11, ל\' = כ\' (11) + 1 = 12 וכן הלאה.";
      break;
    case atBash:
      methodExpTitleH2Element.innerHTML = "את-בש:";
      methodExpSpanElement.innerHTML = "בשיטה זו (ערכי האותיות הן בסדר יורד כלומר ערכה של א\' = 400 = לערכה של ת\' לפי השיטה הרגילה ב\' = 300 (ש,' בשיטה הרגילה) וכן הלאה לפי השיטה הרגילה אך בסדר הפוך כך ש- ש\' = 2 (ב\' בשיטה הרגילה) ו- ת\' = 1 (=א\' בשיטה הרגילה).";
      break;
    case frontedNum:
      methodExpTitleH2Element.innerHTML = "מספר קדמי:";
      methodExpSpanElement.innerHTML = "בשיטה זו ערכה של כל אות שווה לסכום הערכים של כל האותיות עד לאות הנוכחית (כולל), כך ש- א' = 1, ב = א\' (1) + ב' (2) כך ש- ב\' = 3, ג\' = א\' (1) + ב\' (2) = ג\' (3) כך ש- ג\' = 6.";
      break;
    case privateNum:
      methodExpTitleH2Element.innerHTML = "מספר מרובע:";
      methodExpSpanElement.innerHTML = "נקראת גם מספר פרטי, בשיטה זו ערכה של כל אות שווה לערכה של האות בשיטה הרגילה בריבוע, כלומר בחזקת 2.כך שערכה של האות י\' = 10 (בשיטה הרגילה) בריבוע = 100, כ\' = 20 (בשיטה הרגילה) בריבוע = 400 וכן הלאה.";
      break;
    case shemiNum:
      methodExpTitleH2Element.innerHTML = "מספר שמי:";
      methodExpSpanElement.innerHTML = "נקראת גם מילוי אותיות, בשיטה זו כל אות מקבלת את הערך הגימטרי (לפי השיטה הרגילה) של שם אותה האות כך ש - א\' (אלף) = א\' (1) + ל\' (30) + ף\' (80) = 112, ב\' (בית) = ב\' (2) + י\' (10) + ת\' (400) = 412 וכן הלאה.";
      break;
  }
  let methodLettersValues = "";
  for (let letter of lettersArr) {
    showGimatryVal(letter, true);
    methodLettersValues += letter + " = " + sum + ((lettersArr.indexOf(letter) + 1) % 5 == 0 ? "<br>" : " ");
    sum = 0;

  }
  document.getElementById("lettersValuesSpan").innerHTML = methodLettersValues;
}

function showGimatryVal(valWords, descriptionMode) {
  sum = 0;
  var lettersArr = valWords.split("");
  var letter = "";
  for (letter of lettersArr) {

    switch (letter.charCodeAt()) {
      case alef:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 1;
            break;
          case atBash:
            sum += 400;
            break;
          case frontedNum:
            sum += 1;
            break;
          case privateNum:
            sum += 1;
            break;
          case shemiNum:
            sum += 111;
            break;
        }
        break;
      case beit:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 2;
            break;
          case atBash:
            sum += 300;
            break;
          case frontedNum:
            sum += 3;
            break;
          case privateNum:
            sum += 4;
            break;
          case shemiNum:
            sum += 412;
            break;

        }
        break;
      case gimel:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 3;
            break;
          case atBash:
            sum += 200;
            break;
          case frontedNum:
            sum += 6;
            break;
          case privateNum:
            sum += 9;
            break;
          case shemiNum:
            sum += 83;
            break;

        }
        break;
      case dalet:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 4;
            break;
          case atBash:
            sum += 100;
            break;
          case frontedNum:
            sum += 10;
            break;
          case privateNum:
            sum += 16;
            break;
          case shemiNum:
            sum += 434;
            break;
        }
        break;
      case hey:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 5;
            break;
          case atBash:
            sum += 90;
            break;
          case frontedNum:
            sum += 15;
            break;
          case privateNum:
            sum += 25;
            break;
          case shemiNum:
            sum += 6;
            break;
        }
        break;
      case vav:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 6;
            break;
          case atBash:
            sum += 80;
            break;
          case frontedNum:
            sum += 21;
            break;
          case privateNum:
            sum += 36;
            break;
          case shemiNum:
            sum += 22;
            break;
        }
        break;
      case zain:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 7;
            break;
          case atBash:
            sum += 70;
            break;
          case frontedNum:
            sum += 28;
            break;
          case privateNum:
            sum += 49;
            break;
          case shemiNum:
            sum += 77;
            break;
        }
        break;
      case het:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 8;
            break;
          case atBash:
            sum += 60;
            break;
          case frontedNum:
            sum += 36;
            break;
          case privateNum:
            sum += 64;
            break;
          case shemiNum:
            sum += 418;
            break;
        }
        break;
      case tet:
        switch (method) {
          case regular:
          case bigNum:
          case smallNum:
          case sequential:
            sum += 9;
            break;
          case atBash:
            sum += 50;
            break;
          case frontedNum:
            sum += 45;
            break;
          case privateNum:
            sum += 81;
            break;
          case shemiNum:
            sum += 419;
            break;
        }
        break;
      case yud:
        switch (method) {
          case regular:
          case bigNum:
            sum += 10;
            break;
          case smallNum:
            sum += 1;
            break;
          case sequential:
            sum += 10;
            break;
          case atBash:
            sum += 40;
            break;
          case frontedNum:
            sum += 55;
            break;
          case privateNum:
            sum += 100;
            break;
          case shemiNum:
            sum += 20;
            break;
        }
        break;
      case chaf:
        switch (method) {
          case regular:
          case bigNum:
            sum += 20;
            break;
          case smallNum:
            sum += 2;
            break;
          case sequential:
            sum += 11;
            break;
          case atBash:
            sum += 30;
            break;
          case frontedNum:
            sum += 75;
            break;
          case privateNum:
            sum += 400;
            break;
          case shemiNum:
            sum += 100;
            break;
        }
        break;
      case lamed:
        switch (method) {
          case regular:
          case bigNum:
            sum += 30;
            break;
          case smallNum:
            sum += 3;
            break;
          case sequential:
            sum += 12;
            break;
          case atBash:
            sum += 20;
            break;
          case frontedNum:
            sum += 105;
            break;
          case privateNum:
            sum += 900;
            break;
          case shemiNum:
            sum += 74;
            break;
        }
        break;
      case mem:
        switch (method) {
          case regular:
          case bigNum:
            sum += 40;
            break;
          case smallNum:
            sum += 4;
            break;
          case sequential:
            sum += 13;
            break;
          case atBash:
            sum += 10;
            break;
          case frontedNum:
            sum += 145;
            break;
          case privateNum:
            sum += 1600;
            break;
          case shemiNum:
            sum += 80;
            break;
        }
        break;
      case nun:
        switch (method) {
          case regular:
          case bigNum:
            sum += 50;
            break;
          case smallNum:
            sum += 5;
            break;
          case sequential:
            sum += 14;
            break;
          case atBash:
            sum += 9;
            break;
          case frontedNum:
            sum += 195;
            break;
          case privateNum:
            sum += 2500;
            break;
          case shemiNum:
            sum += 106;
            break;
        }
        break;
      case sameche:
        switch (method) {
          case regular:
          case bigNum:
            sum += 60;
            break;
          case smallNum:
            sum += 6;
            break;
          case sequential:
            sum += 15;
            break;
          case atBash:
            sum += 8;
            break;
          case frontedNum:
            sum += 255;
            break;
          case privateNum:
            sum += 3600;
            break;
          case shemiNum:
            sum += 120;
            break;
        }
        break;
      case ayin:
        switch (method) {
          case regular:
          case bigNum:
            sum += 70;
            break;
          case smallNum:
            sum += 7;
            break;
          case sequential:
            sum += 16;
            break;
          case atBash:
            sum += 7;
            break;
          case frontedNum:
            sum += 325;
            break;
          case privateNum:
            sum += 4900;
            break;
          case shemiNum:
            sum += 130;
            break;
        }
        break;
      case pey:
        switch (method) {
          case regular:
          case bigNum:
            sum += 80;
            break;
          case smallNum:
            sum += 8;
            break
          case sequential:
            sum += 17;
            break;
          case atBash:
            sum += 6;
            break;
          case frontedNum:
            sum += 405;
            break;
          case privateNum:
            sum += 6400;
            break;
          case shemiNum:
            sum += 81;
            break;
        }
        break;
      case tzadik:
        switch (method) {
          case regular:
          case bigNum:
            sum += 90;
            break;
          case smallNum:
            sum += 9;
            break;
          case sequential:
            sum += 18;
            break;
          case atBash:
            sum += 5;
            break;
          case frontedNum:
            sum += 495;
            break;
          case privateNum:
            sum += 8100;
            break;
          case shemiNum:
            sum += 104;
            break;
        }
        break;
      case kuf:
        switch (method) {
          case regular:
          case bigNum:
            sum += 100;
            break;
          case smallNum:
            sum += 1;
            break;
          case sequential:
            sum += 19;
            break;
          case atBash:
            sum += 4;
            break;
          case frontedNum:
            sum += 595;
            break;
          case privateNum:
            sum += 10000;
            break;
          case shemiNum:
            sum += 186;
            break;
        }
        break;
      case reish:
        switch (method) {
          case regular:
          case bigNum:
            sum += 200;
            break;
          case smallNum:
            sum += 2;
            break;
          case sequential:
            sum += 20;
            break;
          case atBash:
            sum += 3;
            break;
          case frontedNum:
            sum += 795;
            break;
          case privateNum:
            sum += 40000;
            break;
          case shemiNum:
            sum += 510;
            break;
        }
        break;
      case shin:
        switch (method) {
          case regular:
          case bigNum:
            sum += 300;
            break;
          case smallNum:
            sum += 3;
            break;
          case sequential:
            sum += 21;
            break;
          case atBash:
            sum += 2;
            break;
          case frontedNum:
            sum += 1095;
            break;
          case privateNum:
            sum += 90000;
            break;
          case shemiNum:
            sum += 360;
            break;
        }
        break;
      case taf:
        switch (method) {
          case regular:
          case bigNum:
            sum += 400;
            break;
          case smallNum:
            sum += 4;
            break;
          case sequential:
            sum += 22;
            break;
          case atBash:
            sum += 1;
            break;
          case frontedNum:
            sum += 1495;
            break;
          case privateNum:
            sum += 160000;
            break;
          case shemiNum:
            sum += 416;
            break;
        }
        break;
      case chafSofit:
        switch (method) {
          case regular:
            sum += 20;
            break;
          case bigNum:
            sum += 500;
            break;
          case smallNum:
            sum += 5;
            break;
          case sequential:
            sum += 23;
            break;
          case atBash:
            sum += 30;
            break;
          case frontedNum:
            sum += 75;
            break;
          case privateNum:
            sum += 400;
            break;
          case shemiNum:
            sum += 100;
            break;
        }
        break;
      case memSofit:
        switch (method) {
          case regular:
            sum += 40;
            break;
          case bigNum:
            sum += 600;
            break;
          case smallNum:
            sum += 6;
            break;
          case sequential:
            sum += 24;
            break;
          case atBash:
            sum += 10;
            break;
          case frontedNum:
            sum += 145;
            break;
          case privateNum:
            sum += 1600;
            break;
          case shemiNum:
            sum += 80;
            break;
        }
        break;
      case nunSofit:
        switch (method) {
          case regular:
            sum += 50;
            break;
          case bigNum:
            sum += 700;
            break;
          case smallNum:
            sum += 7;
            break;
          case sequential:
            sum += 25;
            break;
          case atBash:
            sum += 9;
            break;
          case frontedNum:
            sum += 195;
            break;
          case privateNum:
            sum += 2500;
            break;
          case shemiNum:
            sum += 106;
            break;
        }
        break;
      case peySofit:
        switch (method) {
          case regular:
            sum += 80;
            break;
          case bigNum:
            sum += 800;
            break;
          case smallNum:
            sum += 8;
            break;
          case sequential:
            sum += 26;
            break;
          case atBash:
            sum += 6;
            break;
          case frontedNum:
            sum += 405;
            break;
          case privateNum:
            sum += 6400;
            break;
          case shemiNum:
            sum += 81;
            break;
        }
        break;
      case tzadikSofit:
        switch (method) {
          case regular:
            sum += 90;
            break;
          case bigNum:
            sum += 900;
            break;
          case smallNum:
            sum += 9;
            break;
          case sequential:
            sum += 27;
            break;
          case atBash:
            sum += 5;
            break;
          case frontedNum:
            sum += 495;
            break;
          case privateNum:
            sum += 8100;
            break;
          case shemiNum:
            sum += 104;
            break;
        }
        break;
      default:
        break;
    } 
    if (!descriptionMode) {
    	document.getElementById("resLbl").innerHTML = sum;
      }
  }
}

function copyResToClipBrd(txtInput, resVal) {
  if (resVal === "0") return;
	var tmpTA = document.getElementById("tmpForCopyTA");
  let methodName = method == 1 ? "הרגילה" : method == 2 ? "מספר גדול" : method == 3 ? "מספר קטן" : method == 4 ? "סדרתי" : method == 5 ? "את בש" : method == 6 ? "מספר קדמי" : method == 7 ? "מספר מרובע" : "מספר שמי";
  tmpTA.style.display = "block";
  tmpTA.value = txtInput + " = " + resVal + " בגימטריה בשיטה " + methodName;
  tmpTA.select();
  document.execCommand("copy");
  tmpTA.style.display = "none";
  alert("תוצאת החישוב הועתקה ללוח");
}
