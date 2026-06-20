# 🛠 툴바
일반적으로 에디터에서는 단축키나 툴바를 사용하여 특정 텍스트나 노드를 입력할 수 있다. 특히 마크다운처럼 특정한 텍스트 문법이 존재하지 않는 위지윅 에디터에서는 대부분의 동작이 툴바를 통해 이뤄지기 때문에 툴바의 역할이 중요하다. Zen Composer(이하 '에디터'라고 명시) 역시 기본 UI로 툴바를 제공하며 커스터마이징을 위한 옵션과 API도 제공한다.

## 툴바 옵션
에디터는 bold, italic, strike 등 총 16가지의 툴바를 기본으로 제공한다. 별도의 옵션을 지정하지 않았을 경우 기본 툴바 옵션은 아래와 같다.

```js
const options = {
  // ...
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ],
}
```

예제 코드에서 볼 수 있듯이 에디터의 툴바 옵션은 2차원 배열 형태로 정의된다. 먼저 각각의 툴바 그룹을 배열 형태로 정의하며 그룹 내의 툴바 요소들을 배열의 원소로 지정한다. 각 요소들은 정의된 순서대로 그룹 내에서 렌더링되며, 툴바 그룹은 `|` 기호로 구분되어 렌더링 된다. 

![image](https://user-images.githubusercontent.com/37766175/120914229-a137f780-c6d7-11eb-8112-b14a48f8374f.png)

만약 기본 툴바의 구성을 변경하고 싶다면 에디터의 `toolbarItems` 옵션을 지정하여 변경할 수 있다.

```js
const editor = new Editor({
  el: document.querySelector('#editor'),
  toolbarItems: [
    ['heading', 'bold'],
    ['ul', 'ol', 'task'],
    ['code', 'codeblock'],
  ],
});
```

위의 예제 코드를 실행하면 아래처럼 렌더링된다.

![image](https://user-images.githubusercontent.com/37766175/120914344-a47fb300-c6d8-11eb-85cd-857047e8e220.png)

## 툴바 버튼 커스터마이징
위에서 살펴본 예시는 사실 에디터의 기본 툴바 요소를 조합하는 것에 불과하다. 그렇다면 사용자가 직접 툴바 버튼을 만들어 추가하고 싶다면 어떻게 해야 할까? 이런 경우 크게 두 가지 형태의 옵션을 지정하여 커스터마이징할 수 있다.

### 내장 버튼 요소 커스터마이징
먼저 에디터에서 제공하는 툴바 버튼 UI를 그대로 사용하여 커스터마이징하는 방법이 있다. 이 방법은 에디터에 내장된 버튼을 툴바 요소를 렌더링하며, 여기서 버튼의 아이콘이나 툴팁, 팝업 동작만 재정의한다. 해당 옵션은 아래와 같은 인터페이스로 구성된다.

| 이름 | 타입 | 설명 |
| --- | --- | --- |
| `name` | string | 툴바 요소의 고유한 이름이며, 필수로 지정해야 한다. | 
| `tooltip` | string | 옵셔널 값이며, 툴바 요소에 마우스를 올렸을 때 보여줄 툴팁 문자열을 정의한다. | 
| `text` | string | 옵셔널 값이며, 툴바 버튼 요소에 보여줄 텍스트가 있는 경우 정의한다. | 
| `className` | string | 옵셔널 값이며, 툴바 요소에 적용할 class를 정의한다. | 
| `style` | Object | 옵셔널 값이며, 툴바 요소에 적용할 style을 정의한다. | 
| `command` | string | 옵셔널 값이며, 툴바 버튼을 클릭했을 때 실행하고 싶은 명령을 지정한다. `popup` 옵션과는 서로 배타적인 관계이다. | 
| `popup` | PopupOptions | 옵셔널 값이며, 툴바 버튼을 클릭했을 때 팝업을 띄우고 싶은 경우 지정한다. `command` 옵션과는 서로 배타적인 관계이다. |

```js
const editor = new Editor({
  el: document.querySelector('#editor'),
  toolbarItems: [
    [{
      name: 'myItem',
      tooltip: 'myItem',
      command: 'bold',
      text: '@',
      className: 'zen-composer-toolbar-icons',
      style: { backgroundImage: 'none', color: 'red' }
    }]
  ],
  // ...
});
```

위의 예제 코드를 실행하면 옵션으로 설정한 `className`과 `style`이 적용된 툴바 요소가 생성된다. 생성된 요소는 `@` 텍스트 노드를 가지며,  클릭했을 때 `bold` 커맨드를 실행한다.

![image](https://user-images.githubusercontent.com/37766175/120915118-ea3e7a80-c6dc-11eb-86cc-5229ed36c4e8.gif)

### popup 옵션
만약 버튼을 클릭했을 때 커맨드를 실행하는 것이 아니라 직접 정의한 팝업을 띄우고 싶을 수도 있을 것이다. 이런 경우 위에서 살펴본 `popup` 옵션을 사용하면 된다. `popup` 옵션의 인터페이스는 아래와 같다.

| 이름 | 타입 | 설명 |
| --- | --- | --- |
| `body` | HTMLElement | 렌더링 될 팝업 DOM 노드를 정의한다. | 
| `className` | string | 옵셔널 값이며, 팝업 요소에 적용할 class를 정의한다. | 
| `style` | Object | 옵셔널 값이며, 팝업 요소에 적용할 style을 정의한다. | 

옵션으로 설정한 팝업 노드는 툴바를 클릭하였을 때 자동으로 화면에 나타나며, 다른 영역을 클릭했을 경우 자동으로 사라진다.

에디터의 컬러피커 플러그인 코드를 조금 변형하여 살펴보겠다.

```js
const container = document.createElement('div');
// ...
const button = createApplyButton(i18n.get('OK'));

button.addEventListener('click', () => {
  // ...
  eventEmitter.emit('command', 'color', { selectedColor });
  eventEmitter.emit('closePopup');
});

container.appendChild(button);

const colorPickerToolber = {
  name: 'color',
  tooltip: 'Text color',
  className: 'some class',
  popup: {
    className: 'some class',
    body: container,
    style: { width: 'auto' },
  },
};
```

예제 코드에서는 팝업으로 띄울 요소를 `container`란 변수에 담아 지정하였다. 해당 요소는 버튼 요소를 가지며, 이 버튼을 클릭하였을 때 `color` 커맨드를 실행하고 팝업을 닫는다. 직접 정의한 팝업은 `eventEmitter`를 사용하여 에디터와 통신할 수 있다. 커맨드를 실행하기 위해서는 `command` 이벤트를 발생시키면 되고, 팝업을 닫고 싶을 경우 `closePopup` 이벤트를 발생시키면 된다.

정의된 컬러피커 툴바 요소는 아래처럼 팝업과 잘 연동하여 동작하는 것을 볼 수 있다.

![image](https://user-images.githubusercontent.com/37766175/120915630-b6b11f80-c6df-11eb-8094-b264ca9312a1.gif)


## 툴바 요소 커스터마이징
만약 위에서 설명한 것처럼 기본 버튼 UI를 사용하지 않고 툴바 요소를 만들고 싶다면 아래처럼 `el` 옵션을 지정해야 한다.

```js
const myCustomEl = document.createElement('span');

myCustomEl.textContent = '😎';
myCustomEl.style = 'cursor: pointer; background: red;'
myCustomEl.addEventListener('click', () => {
  editor.exec('bold');
});

const editor = new Editor({
  el: document.querySelector('#editor'),
  toolbarItems: [
    [{
      name: 'myItem',
      tooltip: 'myItem',
      el: myCustomEl,
    }]
  ],
  // ...
});
```

렌더링할 요소를 `el` 옵션으로 지정해야 한다. 이 경우 완전한 DOM 요소를 만들어 옵션으로 지정하는 것이기 때문에 클릭했을 때의 동작이나 style, class를 모두 직접 설정해야 한다.

위의 예제 코드를 실행하면 아래와 같이 동작한다.

![iamge](https://user-images.githubusercontent.com/37766175/120915883-3e4b5e00-c6e1-11eb-8f44-95e6d31f41e7.gif)

## 툴바 상태 변경
에디터에서는 현재 커서의 위치에 따라 어떤 노드인지 툴바 요소의 스타일로 활성화할 수 있다. 예를 들어, 커서가 굵은 텍스트를 표시하는 `strong` 노드에 위치한다면, 아래와 같이 `bold` 툴바 요소가 활성화된다.

![image](https://user-images.githubusercontent.com/37766175/124843166-49d5c180-dfcc-11eb-9633-ae1e61d612ea.gif)


위의 예시처럼 커스터마이징한 툴바 요소의 상태를 변경하고 싶다면 `state` 옵션을 지정해야 한다.

```js
const editor = new Editor({
  el: document.querySelector('#editor'),
  toolbarItems: [
    [{
      name: 'myItem',
      tooltip: 'myItem',
      command: 'bold',
      text: '@',
      className: 'zen-composer-toolbar-icons',
      style: { backgroundImage: 'none', color: 'red' },
      // `strong` 노드에 위치할 경우 툴바 요소에 'active' 클래스가 추가된다.
      state: 'strong',
    }]
  ],
  // ...
});
```

`state`에 따라 툴바 버튼이 활성화된다면 `active` 클래스가 추가되며, 이 클래스를 기준으로 원하는 스타일을 지정하면 된다.

### state 목록
아래의 state 값을 사용해야만 툴바 요소의 활성화 상태를 변경할 수 있다.
* `heading`: 헤딩
* `strong`: 볼드
* `emph`: 이탤릭
* `strike`: 스트라이크
* `thematicBreak`: 수평 가로줄 
* `blockQuote`: 인용문
* `bulletList`: 순서가 없는 리스트
* `orderedList`: 순서가 있는 리스트
* `taskList`: task 리스트
* `table`: 테이블
* `code`: 인라인 코드
* `codeBlock`: 코드 블럭

### `onUpdated()` 옵션
기본 버튼 UI를 사용하지 않고 `el` 옵션을 사용하여 툴바 요소를 만든 경우, `onUpdated` 옵션을 지정해야 상태를 변경할 수 있다. 에디터 내부에서 커스터마이징한 툴바 요소를 직접 조작하는 것은 한계가 있기 때문에 `onUpdated` 콜백 옵션을 제공한다.

```js
const myCustomEl = document.createElement('span');

myCustomEl.textContent = '😎';
myCustomEl.style = 'cursor: pointer; background: red;'
myCustomEl.addEventListener('click', () => {
  editor.exec('bold');
});

const editor = new Editor({
  el: document.querySelector('#editor'),
  toolbarItems: [
    [{
      name: 'myItem',
      tooltip: 'myItem',
      el: myCustomEl,
      state: 'strong',
      onUpdated({ active, disabled }) {
        if (active) {
          myCustomEl.style.background = 'green';
        } else {
          myCustomEl.style.background = '';
        }
      }
    }]
  ],
  // ...
});
```

`onUpdated()` 함수는 `active`, `disabled` 상태를 나타내는 객체를 매개변수로 전달한다. 이 매개변수를 사용하여 요소에 스타일링을 추가하거나 원하는 동작을 정의할 수 있다.

## 예제

예제는 [여기](https://nhn.github.io/zen-composer/latest/tutorial-example15-customizing-toolbar-buttons)서 확인할 수 있다.