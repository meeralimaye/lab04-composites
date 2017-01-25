interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text: string;
  constructor(text : string) {
    this.text =text;
  }

  print () {
    console.log(text);
  }
}

class DomElement implements IDomElement {
  elementName : string;
  textContent: string;
  elements: IDomElement[];

  constructor(elementName : string, textContent: string) {
    this.elementName = elementName;
    this.elements = [];
    this.textContent = textContent;
  }

  add(element:IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(this.elementName);
    if (textContent == true) {
      console.log(this.textContent);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(this.elementName);
  }
}

var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");

p1.add("Hi, I am a TextNode being printed!");
p2.add("TextNode == leaf");

html.add(p1);
html.add(p2);
html.print();
