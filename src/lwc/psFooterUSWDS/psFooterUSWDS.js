import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import USWDS from '@salesforce/resourceUrl/USWDS';
import BASEPATH from '@salesforce/community/basePath';

export default class PsFooterUSWDS extends LightningElement {
    @api config;
    @api templateName;

    get isDefault() {
        return (this.templateName == 'USWDS Default' ? true : false);
    }

    get isBig() {
        return (this.templateName == 'USWDS Big' ? true : false);
    }

    get isSlim() {
        return (this.templateName == 'USWDS Slim' ? true : false);
    }

    get isNotSlim() {
        return (this.templateName != 'USWDS Slim' ? true : false);
    }

    get isFacebook() {
        return (this.config && this.config.facebook ? true : false);
    }

    get isTwitter() {
        return (this.config && this.config.twitter ? true : false);
    }

    get isYoutube() {
        return (this.config && this.config.youtube ? true : false);
    }

    get isRSS() {
        return (this.config && this.config.rss ? true : false);
    }

    get isLinkedIn() {
        return (this.config && this.config.linkedin ? true : false);
    }

    get isHome() {
        return (this.config && this.config.home ? true : false);
    }

    get isEmailSignup() {
        return (this.config && this.config.emailSignup ? true : false);
    }

    get isEmail() {
        return (this.config && this.config.email ? true : false);
    }

    get isPhone() {
        return (this.config && this.config.phone ? true : false);
    }

    get emailURL() {
        if (this.config && this.config.email)
        {
          return 'mailto:' + this.config.email;
        }
        return null;
    }

    get phoneURL() {
        if (this.config && this.config.phone)
        {
            return 'tel:' + this.config.phone;
        }
        return null;
    }

    // if Email Signup is present, set Primary Links div to span 8 cols. Otherwise span 12 cols.
    get primaryLinksColumns() {
        if (this.config && this.config.emailSignup)
        {
            return "tablet:grid-col-8"
        }
        return "tablet:grid-col-12"
    }

    get logoIcon() {
        if (this.config && this.config.logoIcon)
        {
          if (this.config.logoIcon.startsWith('/resource'))
          {
              //return 'sfsites/c' + this.config.logoIcon;

              var res;
        
              if (window.location.href.indexOf('live-preview') != -1)
              {
                res = '/sfsites/c' + this.config.logoIcon;
              }
              else
                {
                    res = BASEPATH.substring(0, BASEPATH.length - 2) + this.config.logoIcon;
                }


              return res;
          }
          else
          {
              return this.config.logoIcon;
          }
        }
        return null;
    }

    get footerClass() {
        if (this.templateName == 'USWDS Big')
        {
            return ('usa-footer usa-footer--big');
        }
        else if (this.templateName == 'USWDS Slim')
        {
            return ('usa-footer usa-footer--slim');
        }
        else
        {
            return ('usa-footer');
        }
    }

    

    connectedCallback() {
        Promise.all([
            loadStyle(this, USWDS + '/css/uswds.min.css')
        ]);

    }

    renderedCallback() {
        this.setCSSProperty("footer", "--primary-color-1", this.config.primaryColor1);
        this.setCSSProperty("footer", "--primary-color-1-accessible", this.getAccessibleColor(this.config.primaryColor1));
        this.setCSSProperty("footer", "--primary-color-2", this.config.primaryColor2);
        this.setCSSProperty("footer", "--primary-color-3", this.config.primaryColor3);
        this.setCSSProperty("footer", "--primary-color-4", this.config.primaryColor4);
        this.setCSSProperty("footer", "--primary-color-4-accessible", this.getAccessibleColor(this.config.primaryColor4));
        this.setCSSProperty("footer", "--primary-color-5", this.config.primaryColor5);
        this.setCSSProperty("footer", "--primary-color-5-accessible", this.getAccessibleColor(this.config.primaryColor5));
        this.setCSSProperty("footer", "--secondary-color-1", this.config.secondaryColor1);
        this.setCSSProperty("footer", "--secondary-color-2", this.config.secondaryColor2);
        this.setCSSProperty("footer", "--secondary-color-3", this.config.secondaryColor3);
        this.setCSSProperty("footer", "--secondary-color-4", this.config.secondaryColor4);
        this.setCSSProperty("footer", "--secondary-color-4-accessible", this.getAccessibleColor(this.config.secondaryColor4));
        this.setCSSProperty("footer", "--secondary-color-5", this.config.secondaryColor5);
        this.setCSSProperty("footer", "--secondary-color-5-accessible", this.getAccessibleColor(this.config.secondaryColor5));
    }
    getAccessibleColor(baseColor) {
        const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/
        if (regex.test(baseColor)) {
            console.log(`${baseColor} is a Hex Color`)
            let hexColor = baseColor;
            let red = parseInt(hexColor.substring(1, 3), 16);
            let green = parseInt(hexColor.substring(3, 5), 16);
            let blue = parseInt(hexColor.substring(5, 7), 16);
            var sum = Math.round(((red * 299) + (green * 587) + (blue * 114)) / 1000);
            return (sum > 128) ? 'black' : 'white';
        } else {
            console.log(`${baseColor} was not a Hex Color!`);
            return null;
        }
    }
    setCSSProperty(location, propName, color) {
        if (color == null) {
            console.log(`${color} is null`)
            return
        } else {
            console.log(`Set ${color} to ${propName}`)
            return this.template.querySelector(location).style.setProperty(propName, color)
        }
    }
}