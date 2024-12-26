import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const cardsData = [
  {
    id: 1,
    title: "Brute Force алгоритм",
    description:
      "Brute Force нь бүх боломжит шийдлүүдийг шалгаж, хамгийн оновчтой шийдлийг олох энгийн бөгөөд найдвартай арга юм.",
    detailedContent: `# Brute Force алгоритмын дэлгэрэнгүй тайлбар

## 1. Brute Force гэж юу вэ?
Brute Force нь компьютер программчлалд хамгийн энгийн бөгөөд шууд хандлага юм. Энэ арга нь бүх боломжит шийдлүүдийг системтэйгээр шалгаж үзэх замаар асуудлыг шийддэг.

## 2. Давуу талууд
- **Энгийн байдал:** Ойлгоход болон хэрэгжүүлэхэд хялбар
- **Баталгаат байдал:** Хамгийн сайн шийдлийг олох баталгаатай
- **Бага оролтод үр дүнтэй:** Жижиг хэмжээний өгөгдөлд хурдан ажилладаг
- **Найдвартай байдал:** Алдаа гарах магадлал бага

## 3. Сул талууд
- **Их цаг зарцуулалт:** Том хэмжээний өгөгдөлд маш удаан ажилладаг
- **Их нөөц шаарддаг:** Их хэмжээний санах ой болон CPU шаарддаг
- **Хязгаарлалт:** Том хэмжээний өгөгдөлд практик биш

## 4. Хэрэглээний жишээнүүд
1. **Нууц үг таах:**
   - Бүх боломжит хувилбарыг туршиж үзэх
   - Богино, энгийн нууц үгэнд үр дүнтэй

2. **Худалдаачны асуудал (TSP):**
   - n хотыг нэг удаа дайрч өнгөрөх хамгийн богино зам олох
   - n! ширхэг боломжит замыг шалгана

3. **Шатрын бүх боломжит нүүдлүүд:**
   - Тоглогчийн бүх боломжит нүүдлүүдийг шалгах
   - Хиймэл оюун ухаанд ашиглагддаг

## 5. Код жишээ
\`\`\`python
def bruteForceSearch(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Жишээ массив
arr = [5, 2, 8, 12, 1, 6]
target = 8

# Хайлт хийх
result = bruteForceSearch(arr, target)
print(f"Элементийн байрлал: {result}")
\`\`\`

## 6. Цаг хугацааны үнэлгээ
- Хамгийн шилдэг тохиолдол: O(1)
- Дундаж тохиолдол: O(n/2)
- Хамгийн муу тохиолдол: O(n)

## 7. Практик зөвлөмжүүд
1. Жижиг өгөгдөлтэй ажиллахдаа ашигла
2. Прототип хийхдээ эхлээд энгийн шийдлээр эхэл
3. Оновчтой алгоритм олох боломжгүй үед ашигла
4. Шийдлийн зөв эсэхийг шалгахад ашигла`,
    lessons: 1,
    quizzes: 1,
    author: "Д.Соронзонболд",
    category: "Category A",
    videoUrl: "https://www.youtube.com/embed/BYWf6-tpQ4k",
    topics: [
      "Brute Force үндсэн ойлголт",
      "Хэрэглээний жишээнүүд",
      "Давуу ба сул талууд",
      "Код дээрх жишээнүүд",
    ],
    duration: "45 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Программчлалын үндэс", "Өгөгдлийн бүтэц"],
    quiz1: {
      title: "Brute Force алгоритмын шалгалт",
      questions: [
        {
          id: 1,
          question: "Brute Force алгоритмын гол шинж чанар юу вэ?",
          options: [
            "Эвристик ашиглан шийдлийг хурдан олдог",
            "Бүх боломжит шийдлүүдийг туршиж үздэг",
            "Зөвхөн тоон асуудлуудад ашиглагддаг",
            "Хамгийн үр ашигтай шийдлийг баталгаатай олдог",
          ],
          correctAnswer: 1,
          explanation:
            "Brute Force алгоритм нь бүх боломжит шийдлүүдийг туршиж үзэх замаар ажилладаг.",
        },
        {
          id: 2,
          question: "Дараах алгоритмуудын аль нь Brute Force жишээ вэ?",
          options: [
            "Хоёртын хайлт",
            "Дейкстрагийн алгоритм",
            "Бүрэн хайлт",
            "Динамик программчлал",
          ],
          correctAnswer: 2,
          explanation: "Бүрэн хайлт нь Brute Force алгоритмын нэг жишээ юм.",
        },
        {
          id: 3,
          question:
            "n хотын худалдаачны асуудлыг Brute Force шийдэхэд хамгийн муу тохиолдолд ямар цаг зарцуулах вэ?",
          options: ["O(n^2)", "O(n!)", "O(2^n)", "O(log n)"],
          correctAnswer: 1,
          explanation:
            "Худалдаачны асуудлын Brute Force шийдэл нь O(n!) цаг зарцуулдаг.",
        },
        {
          id: 4,
          question: "Brute Force алгоритмын сул тал юу вэ?",
          options: [
            "Энгийн байдал",
            "Баталгаат зөв байдал",
            "Том оролтын хэмжээнд өндөр тооцооллын зардал",
            "Шийдэл олдохгүй байх боломжтой",
          ],
          correctAnswer: 2,
          explanation:
            "Brute Force алгоритмын гол сул тал нь том оролтын хэмжээтэй үед маш их тооцоолол шаарддаг.",
        },
        {
          id: 5,
          question:
            "Аль тохиолдолд Brute Force алгоритм хамгийн тохиромжтой вэ?",
          options: [
            "Цөөн хязгаарлалттай судоку бодох",
            "Эрэмбэлэгдсэн жагсаалтаас элемент хайх",
            "Богино, энгийн нууц үг таах",
            "Том хэмжээний өгөгдлийг эрэмбэлэх",
          ],
          correctAnswer: 2,
          explanation:
            "Brute Force алгоритм нь нууц үгийн урт болон тэмдэгтийн олонлог бага үед тохиромжтой.",
        },
        {
          id: 6,
          question:
            "Brute Force алгоритм нь том хэмжээний асуудлуудад үр ашиггүй гэж үздэг үү?",
          options: ["Тийм", "Үгүй"],
          correctAnswer: 0,
          explanation:
            "Тийм, учир нь том хэмжээний ас��удлуудад тооцооллын зардал экспоненциал хэлбэрээр өсдөг.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Үйлдлийн систем",
    description:
      "Үйлдлийн системийн үндсэн ойлголт, процесс, thread, санах ой, файлын систем гэх мэт чухал сэдвүүдийг судлах болно.",
    detailedContent: `# Үйлдлийн системийн дэлгэрэнгүй тайлбар

## 1. Үндсэн ойлголт
Үйлдлийн систем нь компьютерийн техник хангамж болон программ хангамжийн хоорондын зохицуулагч юм. Энэ нь хэрэглэгчийн программуудыг ажиллуулах, нөөцийг хуваарилах, системийн аюулгүй байдлыг хангах үндсэн үүрэгтэй.

## 2. Үндсэн бүрэлдэхүүн хэсгүүд
- Процессын удирдлага
- Санах ойн удирдлага
- Файлын систем
- I/O төхөөрөмжийн удирдлага
- Сүлжээний үйлчилгээ

## 3. Процесс ба Thread
### Процесс
- Тусдаа санах ойн орон зай
- Өөрийн нөөц
- Хүнд жинтэй объект

### Thread
- Хуваалцсан санах ой
- Хөнгөн жинтэй
- Нэг процессын хүрээнд олон thread

## 4. Санах ойн удирдлага
- Виртуал санах ой
- Хуудасны удирдлага
- Сегментийн удирдлага
- Кэш санах ой

## 5. Файлын систем
- Файлын бүтэц
- Директорийн бүтэц
- Хандах эрх
- Файлын үйлдлүүд

## 6. Аюулгүй байдал
- Хэрэглэгчийн эрх
- Нөөцийн хамгаалалт
- Вирус хамгаалалт
- Сүлжээний аюулгүй байдал

## 7. Практик жишээнүүд
\`\`\`python
# Process үүсгэх жишээ
import os

pid = os.fork()
if pid > 0:
    print("Parent process")
else:
    print("Child process")
\`\`\`

## 8. Хэрэглээний зөвлөмжүүд
- Системийн нөөцийг зөв хуваарилах
- Процессуудын хоорондын зохицуулалт
- Санах ойн үр ашигтай удирдлага
- Файлын системийн оновчтой ашиглалт`,
    lessons: 1,
    quizzes: 1,
    author: "Д. Золжаргал",
    category: "Category B",
    videoUrl: "https://www.youtube.com/embed/Jy_teuaj7Ic",
    topics: [
      "Үйлдлийн системийн үндэс",
      "Процесс ба Thread",
      "Санах ойн удирдлага",
      "Файлын систем",
    ],
    duration: "60 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Компьютерийн үндэс", "Программчлалын үндэс"],
    quiz1: {
      title: "Үйлдлийн системийн шалгалт",
      questions: [
        {
          id: 1,
          question: "Үйлдлийн системийн үндсэн үүрэг юу вэ?",
          options: [
            "Зөвхөн программ ажиллуулах",
            "Техник ба программ хангамжийн хоорондын зохицуулалт хийх",
            "Зөвхөн файл хадгалах",
            "Интернэт холболт хийх",
          ],
          correctAnswer: 1,
          explanation:
            "Үйлдлийн систем нь техник ба программ хангамжийн хоорондын зохицуулагч юм.",
        },
        {
          id: 2,
          question: "Thread-ийн онцлог юу вэ?",
          options: [
            "Тусдаа санах ойн орон зай шаарддаг",
            "Маш их нөөц шаарддаг",
            "Хуваалцсан санах ойг ашигладаг",
            "Зөвхөн нэг процессор дээр ажилладаг",
          ],
          correctAnswer: 2,
          explanation:
            "Thread нь процессын хүрээнд хуваалцсан санах ойг ашигладаг.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Дискрет математик",
    description:
      "Дискрет математик нь тоон утгатай функц, олонлог, логик, граф зэрэг салангид бүтцүүдийг судалдаг математикийн салбар юм.",
    lessons: 1,
    quizzes: 1,
    author: "Т. Мөнхбат",
    category: "Математик",
    videoUrl: "https://www.youtube.com/embed/-drdeNMoe8w",
    topics: ["Олонлогийн онол", "Логик", "Графын онол", "Тоон онол"],
    duration: "35 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Математикийн үндэс"],
    detailedContent: `# Дискрет математик

## 1. Олонлогийн онол
### 1.1 Үндсэн тодорхойлолтууд
- **Олонлог:** Элементүүдийн цуглуулга
- **Хоосон олонлог:** ∅
- **Дэд олонлог:** A ⊆ B

### 1.2 Үндсэн үйлдлүүд
- **Нэгдэл:** A ∪ B
- **Огтлолцол:** A ∩ B
- **Ялгавар:** A \ B
- **Симметрик ялгавар:** A △ B

## 2. Логик
### 2.1 Үндсэн операторууд
- **Конъюнкц (AND):** ∧
- **Дизъюнкц (OR):** ∨
- **Үгүйсгэл (NOT):** ¬
- **Импликац:** →
- **Эквиваленц:** ↔

## 3. Тоон онол
### 3.1 Үндсэн ойлголтууд
- **Анхны тоо**
- **ХИЕХ (GCD)**
- **ХИБХ (LCM)**
- **Модуль ариметик**

### 3.2 Жишээ бодлогууд
\`\`\`python
# ХИЕХ олох алгоритм
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# Жишээ
print(gcd(48, 18))  # 6
\`\`\`

## 4. Хэрэглээ
1. **Компьютерийн шинжлэх ухаан**
   - Алгоритм
   - Өгөгдлийн бүтэц
   - Криптограф

2. **Хиймэл оюун ухаан**
   - Машин сургалт
   - Хэвшил таних

3. **Сүлжээний технологи**
   - Замын оновчлол
   - Сүлжээний урсгал

## 5. Дасгал ажлууд
1. Олонлогийн үйлдлүүд
2. Логик илэрхийллийн хялбарчлал
3. Графын замын ололт
4. Модуль арифметикийн бодлогууд`,
    quiz1: {
      title: "Дискрет математикийн шалгалт",
      questions: [
        {
          id: 1,
          question: "Графын онолын үндсэн ойлголтуудын аль нь вэ?",
          options: ["Граф", "Оройнууд", "Ирмэгүүд", "Графын төрлүүд"],
          correctAnswer: 1,
          explanation: "Граф нь графын онолын үндсэн ойлголтуудын аль нь юм.",
        },
        {
          id: 2,
          question: "Тоон онолын үндсэн ойлго��туудын аль нь вэ?",
          options: ["Анхны тоо", "ХИЕХ", "ХИБХ", "Модуль арифметик"],
          correctAnswer: 1,
          explanation:
            "Анхны тоо нь тоон онолын үндсэн ойлголтуудын аль нь юм.",
        },
        {
          id: 3,
          question: "Дискрет математикийн хэрэглээн��й аль нь вэ?",
          options: [
            "Компьютерийн шинжлэх ухаан",
            "Хиймэл оюун ухаан",
            "Сүлжээний технологи",
            "Дасгал ажлууд",
          ],
          correctAnswer: 1,
          explanation:
            "Компьютерийн шинжлэх ухаан нь дискрет математикийн хэрэглээний аль нь юм.",
        },
        {
          id: 4,
          question: "Дискрет математикийн дасгал ажлуудын аль нь вэ?",
          options: [
            "Олонлогийн үйлдлүүд",
            "Логик илэрхийллийн хялбарчлал",
            "Графын замын ололт",
            "Модуль арифметикийн бодлогууд",
          ],
          correctAnswer: 1,
          explanation:
            "Олонлогийн үйлдлүүд нь дискрет математикийн дасгал ажлуудын аль нь юм.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Сүлжээний архитектур",
    description:
      "Компьютерийн сүлжээ нь хоёр буюу түүнээс дээш компьютер, төхөөрөмжүүдийг хооронд нь холбож, мэдээлэл солилцох боломжийг олгодог систем юм.",
    lessons: 1,
    quizzes: 1,
    author: "А. Мөнхбаяр",
    category: "Сүлжээ",
    videoUrl: "https://www.youtube.com/embed/oHQvWa6J8dU",
    topics: ["Сүлжээний үндэс", "TCP/IP протокол", "Сүлжээний төхөөрөмжүүд"],
    duration: "35 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Компьютерийн үндэс"],
    detailedContent: `# Компьютерийн сүлжээний үндэс

## 1. Компьютерийн сүлжээ гэж юу вэ?
Компьютерийн сүлжээ нь хоёр буюу түүнээс дээш компьютер, төхөөрөмжүүдийг хооронд нь холбож, мэдээлэл солилцох боломжийг олгодог систем юм.

## 2. Сүлжээний төрлүүд
- **LAN (Local Area Network):** Орон нутгийн сүлжээ
- **WAN (Wide Area Network):** Өргөн хүрээний сүлжээ
- **MAN (Metropolitan Area Network):** Хот хоорондын сүлжээ
- **PAN (Personal Area Network):** Хувийн сүлжээ

## 3. TCP/IP протокол
TCP/IP нь интернэт сүлжээний үндсэн протокол бөгөөд дараах давхаргуудтай:
1. Хэрэглээний давхарга
2. Тээврийн давхарга
3. Интернэт давхарга
4. Сүлжээний интерфейс давхарга

## 4. Сүлжээний төхөөрөмжүүд
- Router (Чиглүүлэгч)
- Switch (Сэлгүүр)
- Hub (Хаб)
- Modem (Модем)
- Firewall (Галт хана)

## 5. IP хаяг
\`\`\`
IPv4: 192.168.1.1
IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
\`\`\`

## 6. Сүлжээний аюулгүй байдал
1. Нууцлалын арга хэмжээнүүд
2. Халдлагаас хамгаалах
3. Өгөгдлийн нөөцлөлт
4. Хэрэглэгчийн эрх зүй

## 7. Практик хэрэглээ
- Файл хуваалцах
- Интернэт ашиглах
- Сүлжээний принтер
- Өгөгдлийн сан
- Мэдээллийн систем`,
    quiz1: {
      title: "Компьютерийн сүлжээний үндэс - Шалгалт 1",
      questions: [
        {
          id: 1,
          question: "TCP/IP протоколын хэдэн давхаргатай вэ?",
          options: ["3 давхарга", "4 давхарга", "5 давхарга", "7 давхарга"],
          correctAnswer: 1,
          explanation:
            "TCP/IP протокол нь 4 үндсэн давхаргатай: Хэрэглээний, Тээврийн, Интернэт, болон Сүлжээний интерфейс давхарга.",
        },
        {
          id: 2,
          question:
            "Дараах сүлжээний төрлүүдээс аль нь хамгийн өргөн хүрээг хамардаг вэ?",
          options: ["LAN", "MAN", "WAN", "PAN"],
          correctAnswer: 2,
          explanation:
            "WAN (Wide Area Network) буюу Өргөн хүрээний сүлжээ нь хамгийн том газар нутгийг хамардаг.",
        },
        {
          id: 3,
          question: "IPv4 хаягийн зөв формат аль нь вэ?",
          options: [
            "192.168.1",
            "192.168.1.1.1",
            "192.168.1.1",
            "192.168.1.256",
          ],
          correctAnswer: 2,
          explanation:
            "IPv4 хаяг нь 4 октет бүхий тоонуудаас бүрддэг (0-255 хүртэл). 192.168.1.1 нь зөв форматтай IPv4 хаяг юм.",
        },
        {
          id: 4,
          question:
            "Аль төхөөрөмж нь сүлжээний аюулгүй байдлыг хангахад ашиглагддаг вэ?",
          options: ["Hub", "Switch", "Firewall", "Modem"],
          correctAnswer: 2,
          explanation:
            "Firewall (Галт хана) нь сүлжээний аюулгүй байдлыг хангах үндсэн төхөөрөмж юм.",
        },
        {
          id: 5,
          question: "LAN гэж юу вэ?",
          options: [
            "Large Area Network",
            "Local Area Network",
            "Long Access Network",
            "Limited Area Network",
          ],
          correctAnswer: 1,
          explanation:
            "LAN (Local Area Network) буюу Орон нутгийн сүлжээ нь нэг байршил дахь компьютеруудыг холбодог сүлжээ юм.",
        },
      ],
    },
    quiz2: {
      title: "Компьютерийн сүлжээний үндэс - Шалгалт 2",
      questions: [
        {
          id: 1,
          question: "Router-ийн үндсэн үүрэг юу вэ?",
          options: [
            "Өгөгдөл хадгалах",
            "Сүлжээ хооронд өгөгдөл дамжуулах",
            "Интернэт холболт үүсгэх",
            "Файл хуваалцах",
          ],
          correctAnswer: 1,
          explanation:
            "Router нь өөр өөр сүлжээнүүдийг холбож, тэдгээрийн хооронд өгөгдөл дамжуулах үүрэгтэй.",
        },
        {
          id: 2,
          question: "Switch-ийн гол онцлог юу вэ?",
          options: [
            "Интернэт холболт үүсгэх",
            "Сүлжээний аюулгүй байдлыг хангах",
            "MAC хаягаар өгөгдөл дамжуулах",
            "Сүлжээ хооронд өгөгдөл дамжуулах",
          ],
          correctAnswer: 2,
          explanation:
            "Switch нь MAC хаягийг ашиглан өгөгдлийг зөв хүлээн авагч руу шууд дамжуулдаг.",
        },
        {
          id: 3,
          question:
            "Сүлжээний аюулгүй байдлын хамгийн чухал элемент аль нь вэ?",
          options: [
            "Хурдан интернэт холболт",
            "Их хэмжээний санах ой",
            "Нууцлалын протокол",
            "Өндөр үнэтэй төхөөрөмж",
          ],
          correctAnswer: 2,
          explanation:
            "Нууцлалын протокол нь сүлжээний аюулгүй байдлын үндсэн элемент бөгөөд өгөгдлийн нууцлал, бүрэн бүтэн байдлыг хангадаг.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Хэрэглээний Математик",
    description: "Математикийн онолын хэрэглээ, бодит амьдрал дээрх жишээнүүд",
    lessons: 1,
    quizzes: 2,
    author: "Т. Мөнхбат",
    category: "Математик",
    videoUrl: "https://www.youtube.com/embed/pAEbTnopjmk",
    topics: [
      "Математикийн үндэс",
      "Функц ба график",
      "Дифференциал тэгшитгэл",
      "Бодит жишээнүүд",
    ],
    duration: "40 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Математик 1", "Математик 2"],
    detailedContent: `# Хэрэглээний Математик

## 1. Математикийн үндэс
### 1.1 Тоон системүүд
- Бодит тоо
- Комплекс тоо
- Вектор, матриц
- Координатын систем

### 1.2 Алгебрын үндэс
- Полином
- Тэгшитгэл
- Тэнцэтгэл биш
- Системийн шийдэл

## 2. Функц ба График
### 2.1 Функцийн төрлүүд
- Шугаман функц
- Квадрат функц
- Экспоненциал функц
- Логарифм функц

### 2.2 Графикийн шинж чанарууд
\`\`\`
y = ax + b    // Шугаман функц
y = ax² + bx + c    // Квадрат функц
y = eˣ    // Экспоненциал функц
y = ln(x)    // Логарифм функц
\`\`\`

## 3. Дифференциал тэгшитгэл
### 3.1 Үндсэн ойлголтууд
- Уламжлал
- Интеграл
- Хязгаар
- Үргэлжлэл

### 3.2 Хэрэглээ
1. Физикийн бодлогууд
2. Инженерийн тооцоолол
3. Эдийн засгийн загварчлал
4. Хүн амын өсөлтийн загвар

## 4. Бодит жишээнүүд
### 4.1 Физик дэх хэрэглээ
- Хурд, хурдатгал
- Хүч, энерги
- Долгион, чичирхийлэл
- Цахилгаан соронзон

### 4.2 Эдийн засаг дахь хэрэглээ
- Ашиг, алдагдал
- Өртөг, орлого
- Эрэлт, нийлүүлэлт
- Хүү, зээлийн тооцоолол

## 5. Практик хэрэглээний жишээнүүд
1. Барилгын инженерчлэл
2. Санхүүгийн загварчлал
3. Байгаль орчны судалгаа
4. Технологийн оновчлол`,
    quiz1: {
      title: "Хэрэглээний Математик - Шалгалт 1",
      questions: [
        {
          id: 1,
          question: "Шугаман функцийн график ямар хэлбэртэй вэ?",
          options: ["Шулуун", "Парабол", "Гипербол", "Экспоненциал"],
          correctAnswer: 0,
          explanation:
            "Шугаман функц y = ax + b нь шулуун шугаман график үүсгэдэг.",
        },
        {
          id: 2,
          question: "Дараах функцүүдээс аль нь квадрат функц вэ?",
          options: ["y = 2x + 1", "y = x² + 2x + 1", "y = 1/x", "y = eˣ"],
          correctAnswer: 1,
          explanation: "Квадрат функц нь y = ax² + bx + c хэлбэртэй байдаг.",
        },
        {
          id: 3,
          question: "Уламжлал юуг илэрхийлдэг вэ?",
          options: [
            "Функцийн утга",
            "Функцийн өөрчлөлтийн хурд",
            "Функцийн талбай",
            "Функцийн эхлэл цэг",
          ],
          correctAnswer: 1,
          explanation: "Уламжлал нь функцийн өөрчлөлтийн хурдыг тодорхойлдог.",
        },
      ],
    },
    quiz2: {
      title: "Хэрэглээний Математик - Шалгалт 2",
      questions: [
        {
          id: 1,
          question: "Интегралын физик утга юу вэ?",
          options: ["Хурд", "Хурдатгал", "Зам", "Хүч"],
          correctAnswer: 2,
          explanation: "Хурдны интеграл нь туулсан замыг илэрхийлдэг.",
        },
        {
          id: 2,
          question: "Экспоненциал функцийг хаана хэрэглэдэг вэ?",
          options: [
            "Зөвхөн математикт",
            "Хүн амын өсөлтийг загварчлахад",
            "Зөвхөн физикт",
            "Зөвхөн химид",
          ],
          correctAnswer: 1,
          explanation:
            "Экспоненциал функцийг хүн амын өсөлт, бактерийн өсөлт зэрэг экспоненциал өсөлтийг загварчлахад өргөн хэрэглэдэг.",
        },
        {
          id: 3,
          question: "Логарифм функцийн хэрэглээ аль нь вэ?",
          options: [
            "Рихтерийн шаталбар",
            "Шугаман хөдөлгөөн",
            "Чөлөөт уналт",
            "Хүчний момент",
          ],
          correctAnswer: 0,
          explanation:
            "Логарифм функцийг газар хөдлөлтийн хүчийг хэмжих Рихтерийн шаталбарт ашигладаг.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Энтропи - Физикийн хэрэглээ",
    description:
      "Энтропи ба термодинамикийн хуулиуд, тэдгээрийн бодит хэрэглээ",
    lessons: 1,
    quizzes: 2,
    author: "Ц. Золбадрал",
    category: "Физик",
    videoUrl: "https://www.youtube.com/embed/vDea-GrxAZQ",
    topics: [
      "Энтропийн үндэс",
      "Термодинамикийн хуулиуд",
      "Энергийн хувиргалт",
      "Бодит хэрэглээ",
    ],
    duration: "45 минут",
    difficulty: "Дунд зэрэг",
    prerequisites: ["Физик 1", "Термодинамик"],
    detailedContent: `# Энтропи ба Термодинамик

## 1. Энтропи гэж юу вэ?
Энтропи нь системийн эмх замбараагүй байдлын хэмжүүр юм. Энэ нь термодинамикийн чухал ойлголт бөгөөд системийн төлөв байдлын өөрчлөлтийг тодорхойлдог.

## 2. Термодинамикийн Хуулиуд
### 2.1 ��эгдүгээр хууль
- Энерги үүсэж үгүй болдоггүй
- Нэг хэлбэрээс нөгөө хэлбэрт шилждэг
- Хаалттай системд энерги тогтмол байна

### 2.2 Хоёрдугаар хууль
- Энтропи нэмэгддэг
- Эргэшгүй процесс
- Дулааны урсгалын чиглэл

## 3. Энтропийн Тооцоолол
\`\`\`
ΔS = Q/T    // Энтропийн өөрчлөлт
S = k * ln(W)    // Больцманы тэгшитгэл
\`\`\`

## 4. Энтропийн Жишээнүүд
### 4.1 Байгаль дээр
- Мөсний хайлалт
- Усны ууршилт
- Химийн урвал
- Биологийн процессууд

### 4.2 Технологид
- Дулааны хөдөлгүүр
- Хөргөлтийн систем
- Эрчим хүчний үйлдвэрлэл
- Материалын шинж чанар

## 5. Практик Хэрэглээ
1. Инженерийн систем
2. Байгаль орчны судалгаа
3. Химийн үйлдвэрлэл
4. Эрчим хүчний үр ашиг

## 6. Энтропи ба Мэдээллийн онол
- Шеннонгийн энтропи
- Мэдээллийн алдагдал
- Кодчлолын онол
- Квант мэдээлэл

## 7. Орчин үеийн судалгаа
- Хар нүхний энтропи
- Нано технологи
- Квант системүүд
- Амьд организмын энтропи`,
    quiz1: {
      title: "Энтропи - Шалгалт 1",
      questions: [
        {
          id: 1,
          question: "Энтропи юуг илэрхийлдэг вэ?",
          options: [
            "Системийн энерги",
            "Системийн эмх замбараагүй байдал",
            "Системийн температур",
            "Системийн даралт",
          ],
          correctAnswer: 1,
          explanation:
            "Энтропи нь системийн эмх замбараагүй байдлын хэмжүүр юм.",
        },
        {
          id: 2,
          question: "Термодинамикийн 2-р хуулийн гол санаа юу вэ?",
          options: [
            "Энерги хадгалагдана",
            "Энтропи буурна",
            "Энтропи нэмэгдэнэ",
            "Энерги тогтмол байна",
          ],
          correctAnswer: 2,
          explanation:
            "Термодинамикийн 2-р хуулиар хаалттай системд энтропи үргэлж нэмэгддэг.",
        },
        {
          id: 3,
          question: "Больцманы тэгшитгэлд 'k' юу вэ?",
          options: [
            "Температур",
            "Больцманы тогтмол",
            "Кинетик энерги",
            "Даралт",
          ],
          correctAnswer: 1,
          explanation:
            "k нь Больцманы тогтмол бөгөөд энтропийн тооцоололд чухал үүрэгтэй.",
        },
      ],
    },
    quiz2: {
      title: "Энтропи - Шалгалт 2",
      questions: [
        {
          id: 1,
          question: "Аль нь энтропийн жишээ вэ?",
          options: [
            "Цэвэр ус хөлдөх",
            "Мөс хайлах",
            "Уур конденсацлах",
            "Давс талстжих",
          ],
          correctAnswer: 1,
          explanation:
            "Мөс хайлах үед системийн эмх замбараагүй байдал нэмэгддэг.",
        },
        {
          id: 2,
          question: "Шеннонгийн энтропи юуг хэмждэг вэ?",
          options: [
            "Дулааны энерги",
            "Мэдээллийн тодорхойгүй байдал",
            "Системийн температур",
            "Молекулын хурд",
          ],
          correctAnswer: 1,
          explanation:
            "Шеннонгийн энтропи нь мэдээллийн системийн тодорхойгүй байдлыг хэмждэг.",
        },
        {
          id: 3,
          question: "Хар нүхний энтропи яагаад чухал вэ?",
          options: [
            "Энергийг хадгалдаг",
            "Мэдээллийг хадгалдаг",
            "Квант механикийн парадокс үүсгэдэг",
            "Температурыг хэмждэг",
          ],
          correctAnswer: 2,
          explanation:
            "Хар нүхний энтропи нь мэдээллийн парадоксыг үүсгэдэг бөгөөд квант механик, ерөнхий харьцангуйн онолын хооронд зөрчил үүсгэдэг.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Япон хэл",
    description: "Япон хэлний үндэс, үсэг бичиг, өдөр тутмын харилцаа",
    lessons: 1,
    quizzes: 2,
    author: "М. Оюунчимэг",
    category: "Гадаад хэл",
    videoUrl: "https://www.youtube.com/embed/DEH2-WXjNwM",
    topics: [
      "Хирагана, Катакана",
      "Ханзны үндэс",
      "Өдөр тутмын яриа",
      "Япон соёл",
    ],
    duration: "40 минут",
    difficulty: "Хялбар",
    prerequisites: ["Байхгүй"],
    detailedContent: `# Япон хэлний үндэс

## 1. Япон хэлний бичиг үсэг
### 1.1 Хирагана
- あ い う え お (a i u e o)
- か き く け こ (ka ki ku ke ko)
- さ し す せ そ (sa shi su se so)
- た ち つ て と (ta chi tsu te to)
- な に ぬ ね の (na ni nu ne no)

### 1.2 Катакана
- ア イ ウ エ オ (a i u e o)
- カ キ ク ケ コ (ka ki ku ke ko)
- サ シ ス セ ソ (sa shi su se so)
- タ チ ツ テ ト (ta chi tsu te to)
- ナ ニ ヌ ネ ノ (na ni nu ne no)

## 2. Өдөр тутмын хэллэгүүд
\`\`\`
おはようございます。 - Өглөөний мэнд
こんにちは。 - Өдрийн мэнд
こんばんは。 - Оройн мэнд
さようなら。 - Баяртай
ありがとうございます。 - Баярлалаа
\`\`\`

## 3. Япон хэлний дүрэм
### 3.1 Өгүүлбэрийн бүтэц
- Субъект + Объект + Үйл үг
- は (wa) - сэдвийн жижиг үг
- が (ga) - субъектийн жижиг үг
- を (wo) - объектийн жижиг үг

### 3.2 Үйл үгийн цаг
- ます (masu) - албан ёсны төгсгөл
- ました (mashita) - өнгөрсөн цаг
- ません (masen) - үгүйсгэл
- ましょう (mashou) - санал болгох

## 4. Тоо тоолол
- 一 (ichi) - нэг
- 二 (ni) - хоёр
- 三 (san) - гурав
- 四 (yon/shi) - дөрөв
- 五 (go) - тав

## 5. Соёлын онцлог
1. Мэхэлзэх
2. Бэлэг дурсгал
3. Ёс заншил
4. Баяр ёслол

## 6. Практик хэрэглээ
- Ресторанд захиалга өгөх
- Замын чиглэл асуух
- Дэлгүүрээс худалдан авалт хийх
- Өдөр тутмын мэндчилгээ

## 7. Хэлний түвшин
- N5 - Анхан шат
- N4 - Дунд шат
- N3 - Дээд дунд шат
- N2 - Ахисан шат
- N1 - Мэргэжлийн шат`,
    quiz1: {
      title: "Япон хэл - Шалгалт 1",
      questions: [
        {
          id: 1,
          question: "おはようございます гэж юу гэсэн үг вэ?",
          options: ["Оройн мэнд", "Өглөөний мэнд", "Өдрийн мэнд", "Баяртай"],
          correctAnswer: 1,
          explanation:
            "おはようございます (Ohayou gozaimasu) нь өглөөний мэнд гэсэн үг.",
        },
        {
          id: 2,
          question:
            "Япон хэлний ямар бичиг үсэг гадаад үгийг бичихэд хэрэглэгддэг вэ?",
          options: ["Хирагана", "Катакана", "Ханз", "Ромажи"],
          correctAnswer: 1,
          explanation:
            "Катакана нь гадаад үг, нэр болон онцгой үгсийг бичихэд хэрэглэгддэг.",
        },
        {
          id: 3,
          question: "は (wa) жижиг үгийн үүрэг юу вэ?",
          options: [
            "Объектийг заана",
            "Сэдвийг заана",
            "Үйл үгийг заана",
            "Тодотгол үгийг заана",
          ],
          correctAnswer: 1,
          explanation:
            "は (wa) нь өгүүлбэрийн сэдвийг заах үүрэгтэй жижиг үг юм.",
        },
      ],
    },
    quiz2: {
      title: "Япон хэл - Шалгалт 2",
      questions: [
        {
          id: 1,
          question: "ありがとうございます гэж юу гэсэн үг вэ?",
          options: ["Уучлаарай", "Баяртай", "Баярлалаа", "Тавтай морил"],
          correctAnswer: 2,
          explanation:
            "ありがとうございます (Arigatou gozaimasu) нь баярлалаа гэсэн үг.",
        },
        {
          id: 2,
          question: "Япон хэлний JLPT шалгалтын хамгийн өндөр түвшин аль вэ?",
          options: ["N5", "N4", "N2", "N1"],
          correctAnswer: 3,
          explanation:
            "N1 нь Япон хэлний чадварын түвшин тогтоох JLPT шалгалтын хамгийн өндөр түвшин юм.",
        },
        {
          id: 3,
          question: "Япон хэлэнд хэдэн төрлийн бичиг үсэг байдаг вэ?",
          options: ["2 төрөл", "3 төрөл", "4 төрөл", "5 төрөл"],
          correctAnswer: 1,
          explanation:
            "Япон хэлэнд Хирагана, Катакана, Ханз гэсэн 3 төрлийн бичиг үсэг байдаг.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Advanced English Language",
    description:
      "Enhance your English skills with advanced grammar, vocabulary, and communication techniques.",
    lessons: 1,
    quizzes: 2,
    author: "А. Даваа",
    category: "Language",
    videoUrl: "https://www.youtube.com/embed/VIihFp6aq3U",
    topics: [
      "Advanced Grammar",
      "Complex Sentence Structures",
      "Idiomatic Expressions",
      "Business English",
      "Public Speaking",
    ],
    duration: "50 minutes",
    difficulty: "Advanced",
    prerequisites: ["Intermediate English"],
    detailedContent: `# Advanced English Language

## 1. Advanced Grammar
### 1.1 Tenses
- Present Perfect vs. Past Simple
- Future Perfect Continuous
- Conditional Sentences

### 1.2 Modals of Deduction
- Must, Might, Could
- Should have, Could have, Would have

## 2. Complex Sentence Structures
### 2.1 Subordinate Clauses
- Relative Clauses
- Adverbial Clauses
- Noun Clauses

### 2.2 Sentence Variety
- Combining Simple Sentences
- Using Transitions for Flow

## 3. Idiomatic Expressions
- Common Idioms in English
- How to Use Idioms in Conversation
- Cultural Context of Idioms

## 4. Business English
### 4.1 Professional Vocabulary
- Terms for Meetings and Presentations
- Email Etiquette
- Negotiation Language

### 4.2 Writing Skills
- Crafting Professional Emails
- Report Writing
- CV and Cover Letter Tips

## 5. Public Speaking
### 5.1 Techniques for Effective Speaking
- Body Language
- Voice Modulation
- Engaging the Audience

### 5.2 Preparing a Speech
- Structuring Your Speech
- Using Visual Aids
- Handling Questions

## 6. Practice Exercises
- Grammar Quizzes
- Writing Prompts
- Speaking Activities

## 7. Resources for Further Learning
- Recommended Books
- Online Courses
- Language Exchange Platforms`,
    quiz1: {
      title: "Advanced English - Quiz 1",
      questions: [
        {
          id: 1,
          question: "Which sentence uses the present perfect tense correctly?",
          options: [
            "I have seen that movie yesterday.",
            "I saw that movie yesterday.",
            "I have seen that movie.",
            "I see that movie.",
          ],
          correctAnswer: 2,
          explanation:
            "The present perfect tense is used to indicate an action that occurred at an unspecified time.",
        },
        {
          id: 2,
          question: "What does the idiom 'break the ice' mean?",
          options: [
            "To start a conversation in a social setting",
            "To destroy something",
            "To make a situation worse",
            "To freeze water",
          ],
          correctAnswer: 0,
          explanation:
            "'Break the ice' means to initiate conversation in a social setting, especially among strangers.",
        },
        {
          id: 3,
          question: "Which modal verb indicates a strong assumption?",
          options: ["Might", "Could", "Must", "Should"],
          correctAnswer: 2,
          explanation:
            "The modal verb 'must' indicates a strong assumption or certainty about something.",
        },
      ],
    },
    quiz2: {
      title: "Advanced English - Quiz 2",
      questions: [
        {
          id: 1,
          question: "What is the purpose of a relative clause?",
          options: [
            "To provide additional information about a noun",
            "To express a complete thought",
            "To connect two independent clauses",
            "To show contrast",
          ],
          correctAnswer: 0,
          explanation:
            "A relative clause provides additional information about a noun in the sentence.",
        },
        {
          id: 2,
          question:
            "Which of the following is an example of a conditional sentence?",
          options: [
            "If it rains, I will stay home.",
            "I will stay home.",
            "It is raining.",
            "I stayed home yesterday.",
          ],
          correctAnswer: 0,
          explanation:
            "Conditional sentences express a condition and its possible outcome.",
        },
        {
          id: 3,
          question:
            "What is the best way to engage an audience during a speech?",
          options: [
            "Read directly from your notes",
            "Make eye contact and ask questions",
            "Speak in a monotone voice",
            "Avoid making jokes",
          ],
          correctAnswer: 1,
          explanation:
            "Engaging an audience involves making eye contact and interacting with them.",
        },
        {
          id: 4,
          question:
            "Which tense is used to describe an action that has been completed at some indefinite time in the past?",
          options: [
            "Past Simple",
            "Present Perfect",
            "Future Perfect",
            "Past Perfect",
          ],
          correctAnswer: 1,
          explanation:
            "The Present Perfect tense is used to describe actions that occurred at an unspecified time before now.",
        },
        {
          id: 5,
          question: "What does the idiom 'hit the nail on the head' mean?",
          options: [
            "To make a mistake",
            "To be exactly right about something",
            "To work hard",
            "To be confused",
          ],
          correctAnswer: 1,
          explanation:
            "'Hit the nail on the head' means to describe exactly what is causing a situation or problem.",
        },
      ],
    },
  },
];

const FilterableCards = ({ onCourseClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Category A", "Category B", "Category C"];

  const filteredCards = cardsData.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" || card.category === selectedCategory;
    const matchesSearch =
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (card) => {
    onCourseClick(card.id);
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedCategory === category
                ? "bg-blue-50 text-blue-500 border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow p-4 border border-gray-200 cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>
                {card.lessons} lessons · {card.quizzes} quizzes
              </p>
              <p>{card.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableCards;
