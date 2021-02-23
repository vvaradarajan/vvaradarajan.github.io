
  import {LitElement, html,css} from 'lit-element';
  
  //utility functions
  export function disp_box(e) {
      let promptName=e.getAttribute('title')
      if (promptName) {
        if (promptName=='cyborgops') {
            alert('CyborgOps is a great Company!');
        } else alert(`I got this ${promptName}`);
        } else alert(`I did not get any name`);
  }

  class TextAreaBlurb extends LitElement {
    static get styles() {
        return css`
          .txtarearight {
            float:left;margin-top:6em;
            background-color: #54abed;border-radius: 25px;
            border-color: coral;
            border-width:2px;
            position:relative;
            padding:10px;
            font-family:"Times New Roman", Times, serif;  
            font-size: 20px; 
          }
          .mobilemargin {margin-top:1em;width:80%;text-align: left;}  
        `;
      }

    static telPrompts = 
        {'telephone':'Delight your customers with a phone AI they actually like.',
        'zeromissed':'No missed calls, and less waiting make an happy customer!',
        'smoothoperations':'Operations run smoother when telephone ringing..ringing.. are reduced!',
        'revenue':'Upto 20% increase in telephone orders',
        'cyborgops':'Part Human, Part Machine, Relentless in Service..'
        }
    constructor() {
            super();
            this.prompt=''
            this.mobile=window.innerWidth < 1024
    }
    showPrompt(promptKey) {
        this.prompt=TextAreaBlurb.telPrompts[promptKey]
        this.requestUpdate()
    }
    render() {
        if (this.prompt) {
          let classVar="txtarearight"
          if (this.mobile) classVar="txtarearight mobilemargin"
          return html `
          <div class="${classVar}">
          ${this.prompt}
          </div>
            `
        }
        else return html ``
    }
  }
  customElements.define('textarea-blurb',TextAreaBlurb)