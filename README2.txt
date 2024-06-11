shift+!+Tab : html sample code
shift + alt + f 문서 자동 정렬

더미문장 만들기 

- lorem*단락수 + enter

**1. 코드 자동 완성 : ctrl + space**

**2. 마우스 쓰지 않고 코드 블럭 씌우기 : shift + 방향키**

**4. 주석 처리(해제) : ctrl +  /**

• Ctrl + F5 : 실행

```
주석Ctrl + K, C : 여러 줄 주석Ctrl + K, U : 여러 줄 주석 해제
```

Emmet 단축키

1. “**!**”치고 “tab”; 또는 “HTML”입력 후 “HTML:5” 선택

### **2. 하위 요소 생성: “>” 사용**

```
/* 예: */
header>ul>li
```

### **3. 동급 요소 생성: “+” 사용**

```
/* 예: */
section>article>h2+p
```

### **4. 반복 태그 생성: “*” 사용**

```
/* 예: */
ul>li*5
```

### **5. CSS class 와 id 설정: “.” 와 “#”사용**

```
/* 예: */
ul#menu>li.item*3
```

### **6. Grouping (그룹화) : “( )” 사용**

```
/* 예: */
.container>(header>nav>ul>li*5>a)+(#content>section)+footer
```

### **7. 속성 [attribute] 있는 태그: “[]”사용**

```
/* 예: */
td[title="name" colspan="5"]
```

### **8. 텍스트가 있는 태그: {} 중괄호 안에 {텍스트}를 입력**

```
/* 예: */
a.button{Click Me}
```

### **9. 넘버링(숫자를 순서대로 나열): “$”사용**

```
/* 예: */
ul.list>li.item$*5>{$}
```