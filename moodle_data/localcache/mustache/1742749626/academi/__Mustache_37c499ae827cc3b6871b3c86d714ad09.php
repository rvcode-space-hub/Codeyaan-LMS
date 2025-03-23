<?php

class __Mustache_37c499ae827cc3b6871b3c86d714ad09 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $value = $context->find('footersmall');
        $buffer .= $this->sectionE43fae7703392787aa4aff365b1dde01($context, $indent, $value);
        $buffer .= $indent . '
';
        $value = $context->find('footersmall');
        if (empty($value)) {
            
            $buffer .= $indent . '    <footer id="page-footer" class="footer-popover footer-dark text-light">
';
            $buffer .= $indent . '        <div id="footer" ';
            $value = $context->find('footerbgimgclass');
            $buffer .= $this->sectionAd35e9a3cbf48574b19da6c4e65afc4e($context, $indent, $value);
            $buffer .= '>
';
            $value = $context->find('footerstatus');
            $buffer .= $this->sectionA257e668ab477e4d980d9b01f717181e($context, $indent, $value);
            $value = $context->find('footerbottomstatus');
            $buffer .= $this->section276899c39b8038794b9b2ee99990cc6b($context, $indent, $value);
            $buffer .= $indent . '            <div data-region="footer-container-popover">
';
            $value = $context->findDot('output.has_communication_links');
            $buffer .= $this->sectionFb6792e2b3850088104a7eb1c247f8c2($context, $indent, $value);
            $buffer .= $indent . '                <button class="btn btn-icon bg-secondary icon-no-margin btn-footer-popover" data-action="footer-popover" aria-label="';
            $value = $context->find('str');
            $buffer .= $this->section5a5198f26dc6ad191d1a18c314235d65($context, $indent, $value);
            $buffer .= '">
';
            $buffer .= $indent . '                    ';
            $value = $context->find('pix');
            $buffer .= $this->section46f926dcc61094038ebb3542556c1993($context, $indent, $value);
            $buffer .= '
';
            $buffer .= $indent . '                </button>
';
            $buffer .= $indent . '            </div>
';
            $buffer .= $indent . '            <div class="footer-content-popover container" data-region="footer-content-popover">
';
            $value = $context->findDot('output.has_communication_links');
            $buffer .= $this->section03d8b0ec17fd9fb16b53e1cb3cbeed65($context, $indent, $value);
            $value = $context->findDot('output.has_popover_links');
            $buffer .= $this->sectionA77d76f233a7692a380a3b52797f8a44($context, $indent, $value);
            $buffer .= $indent . '
';
            $buffer .= $indent . '                <div class="footer-section p-3 border-bottom">
';
            $buffer .= $indent . '                    <div class="logininfo">
';
            $buffer .= $indent . '                        ';
            $value = $this->resolveValue($context->findDot('output.login_info'), $context);
            $buffer .= ($value === null ? '' : $value);
            $buffer .= '
';
            $buffer .= $indent . '                    </div>
';
            $buffer .= $indent . '                    <div class="tool_usertours-resettourcontainer">
';
            $buffer .= $indent . '                    </div>
';
            $buffer .= $indent . '                    ';
            $value = $this->resolveValue($context->findDot('output.standard_footer_html'), $context);
            $buffer .= ($value === null ? '' : $value);
            $buffer .= '
';
            $buffer .= $indent . '                    ';
            $value = $this->resolveValue($context->findDot('output.standard_end_of_body_html'), $context);
            $buffer .= ($value === null ? '' : $value);
            $buffer .= '
';
            $buffer .= $indent . '                </div>
';
            $buffer .= $indent . '
';
            $buffer .= $indent . '                <div class="footer-section p-3">
';
            $buffer .= $indent . '                    <div>';
            $value = $context->find('str');
            $buffer .= $this->section3cef0c729bd31199c0f96ce94b38f287($context, $indent, $value);
            $buffer .= '</div>
';
            $value = $context->findDot('output.moodle_release');
            $buffer .= $this->sectionF0d717abadb36798f34408dbd372939f($context, $indent, $value);
            $buffer .= $indent . '                </div>
';
            $buffer .= $indent . '            </div>
';
            $buffer .= $indent . '        </div>
';
            $buffer .= $indent . '    </footer>
';
        }
        $buffer .= $indent . '
';
        $value = $context->find('backtotopbtn');
        $buffer .= $this->sectionEf2aef73b602bcd95c0478d1879810e4($context, $indent, $value);
        $buffer .= $indent . '
';
        $value = $context->find('js');
        $buffer .= $this->section8397d600017f65f298d8425ee0497b7d($context, $indent, $value);
        $buffer .= $indent . '
';
        $value = $context->find('js');
        $buffer .= $this->section44cca7cb7eae6e808ea785e5453e43c0($context, $indent, $value);
        $buffer .= $indent . '
';

        return $buffer;
    }

    private function sectionA9886fc24541cbe929a87bd184e83d92(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <p>{{{copyrightfooter}}}</p>
                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <p>';
                $value = $this->resolveValue($context->find('copyrightfooter'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</p>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionE43fae7703392787aa4aff365b1dde01(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
    <footer id="page-footer" class=" footer-popover footer-dark text-light">
        <div id="footer">
            <div class="footer-bottom">
                {{# copyrightfooter}}
                    <p>{{{copyrightfooter}}}</p>
                {{/ copyrightfooter}}
            </div>
        </div>
    </footer>
';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '    <footer id="page-footer" class=" footer-popover footer-dark text-light">
';
                $buffer .= $indent . '        <div id="footer">
';
                $buffer .= $indent . '            <div class="footer-bottom">
';
                $value = $context->find('copyrightfooter');
                $buffer .= $this->sectionA9886fc24541cbe929a87bd184e83d92($context, $indent, $value);
                $buffer .= $indent . '            </div>
';
                $buffer .= $indent . '        </div>
';
                $buffer .= $indent . '    </footer>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionAd35e9a3cbf48574b19da6c4e65afc4e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' class="{{footerbgimgclass}}" ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= ' class="';
                $value = $this->resolveValue($context->find('footerbgimgclass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '" ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section1033366f64fe0fd7e152c8d357d307ce(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                <h2>{{ftitle1}}</h2>
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                <h2>';
                $value = $this->resolveValue($context->find('ftitle1'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '</h2>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section6017b54869351ff8ec69720bd2974b2b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                    <div class="footer-logo">
                                                        <h2 class="site-name">Infinity Learn Academy</h2>
                                                    </div>
                                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                    <div class="footer-logo">
';
                $buffer .= $indent . '                                                        <h2 class="site-name">Infinity Learn Academy</h2>
';
                $buffer .= $indent . '                                                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section40c0dffbe32d85b0ef78b1905af9627b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                {{#footerlogourl}}
                                                    <div class="footer-logo">
                                                        <h2 class="site-name">Infinity Learn Academy</h2>
                                                    </div>
                                                {{/footerlogourl}}
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('footerlogourl');
                $buffer .= $this->section6017b54869351ff8ec69720bd2974b2b($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section984dc74a3e2f2893841dd935828f2d83(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                {{{footnote}}}
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                ';
                $value = $this->resolveValue($context->find('footnote'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF7d6c064ba0221c7296b0cf43e74c04b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                    <div class="{{colclass}}">
                                        <div class="infoarea">
                                            {{#ftitle1}}
                                                <h2>{{ftitle1}}</h2>
                                            {{/ftitle1}}
                                            {{#footlogostatus}}
                                                {{#footerlogourl}}
                                                    <div class="footer-logo">
                                                        <h2 class="site-name">Infinity Learn Academy</h2>
                                                    </div>
                                                {{/footerlogourl}}
                                            {{/footlogostatus}}
                                            {{#footnote}}
                                                {{{footnote}}}
                                            {{/footnote}}
                                        </div>
                                    </div>
                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                    <div class="';
                $value = $this->resolveValue($context->find('colclass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '">
';
                $buffer .= $indent . '                                        <div class="infoarea">
';
                $value = $context->find('ftitle1');
                $buffer .= $this->section1033366f64fe0fd7e152c8d357d307ce($context, $indent, $value);
                $value = $context->find('footlogostatus');
                $buffer .= $this->section40c0dffbe32d85b0ef78b1905af9627b($context, $indent, $value);
                $value = $context->find('footnote');
                $buffer .= $this->section984dc74a3e2f2893841dd935828f2d83($context, $indent, $value);
                $buffer .= $indent . '                                        </div>
';
                $buffer .= $indent . '                                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB597bcc4e4a433d1f9e947ce5741a692(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                <h2>{{ftitle2}}</h2>
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                <h2>';
                $value = $this->resolveValue($context->find('ftitle2'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '</h2>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionD668e8ac796ceb7827dc31eb854bc1fd(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                <ul>
                                                    {{{infolink}}}
                                                </ul>
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                <ul>
';
                $buffer .= $indent . '                                                    ';
                $value = $this->resolveValue($context->find('infolink'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '
';
                $buffer .= $indent . '                                                </ul>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionDbda50c93750eb40a8512d8085218d72(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                    <div class="{{colclass}} footer-links-block">
                                        <div class="foot-links">
                                            {{#ftitle2}}
                                                <h2>{{ftitle2}}</h2>
                                            {{/ftitle2}}
                                            {{# infolink}}
                                                <ul>
                                                    {{{infolink}}}
                                                </ul>
                                            {{/ infolink}}
                                        </div>
                                    </div>
                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                    <div class="';
                $value = $this->resolveValue($context->find('colclass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= ' footer-links-block">
';
                $buffer .= $indent . '                                        <div class="foot-links">
';
                $value = $context->find('ftitle2');
                $buffer .= $this->sectionB597bcc4e4a433d1f9e947ce5741a692($context, $indent, $value);
                $value = $context->find('infolink');
                $buffer .= $this->sectionD668e8ac796ceb7827dc31eb854bc1fd($context, $indent, $value);
                $buffer .= $indent . '                                        </div>
';
                $buffer .= $indent . '                                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section5560f8335f0cd878e735094322f2931f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                <h2>{{ftitle3}}</h2>
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                <h2>';
                $value = $this->resolveValue($context->find('ftitle3'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '</h2>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section737ee21e1f8c72d24c3e69f82acc5b9b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                    <div class="{{colclass}}">
                                        <div class="contact-info">
                                            {{#ftitle3}}
                                                <h2>{{ftitle3}}</h2>
                                            {{/ftitle3}}
                                            <p>C-27A, Dayal Bagh, Faridabad, Haryana, India</P>
                                            <p>Phone : 9871585013</p>
                                            <p>Emial : infowebservices2024@gmail.com
                                        </div>
                                    </div>
                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                    <div class="';
                $value = $this->resolveValue($context->find('colclass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '">
';
                $buffer .= $indent . '                                        <div class="contact-info">
';
                $value = $context->find('ftitle3');
                $buffer .= $this->section5560f8335f0cd878e735094322f2931f($context, $indent, $value);
                $buffer .= $indent . '                                            <p>C-27A, Dayal Bagh, Faridabad, Haryana, India</P>
';
                $buffer .= $indent . '                                            <p>Phone : 9871585013</p>
';
                $buffer .= $indent . '                                            <p>Emial : infowebservices2024@gmail.com
';
                $buffer .= $indent . '                                        </div>
';
                $buffer .= $indent . '                                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section130076ad46f12e640c65cf22c1aea1f4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                <h2>{{ftitle4}}</h2>
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                <h2>';
                $value = $this->resolveValue($context->find('ftitle4'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '</h2>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionBef0df1df7c721df332a8da3bbc11fa9(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                        <li class="smedia-{{sno}}">
                                                            <a href="{{{surl}}}" target="_blank" style="background-color: {{{siconcolor}}}">
                                                                <span class="media-icon">
                                                                    <i class="fa fa-{{sicon}}"></i>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                                        <li class="smedia-';
                $value = $this->resolveValue($context->find('sno'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '">
';
                $buffer .= $indent . '                                                            <a href="';
                $value = $this->resolveValue($context->find('surl'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '" target="_blank" style="background-color: ';
                $value = $this->resolveValue($context->find('siconcolor'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '">
';
                $buffer .= $indent . '                                                                <span class="media-icon">
';
                $buffer .= $indent . '                                                                    <i class="fa fa-';
                $value = $this->resolveValue($context->find('sicon'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '"></i>
';
                $buffer .= $indent . '                                                                </span>
';
                $buffer .= $indent . '                                                            </a>
';
                $buffer .= $indent . '                                                        </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionA1628dd71d081665280e22151c726b43(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                    {{#sicon}}
                                                        <li class="smedia-{{sno}}">
                                                            <a href="{{{surl}}}" target="_blank" style="background-color: {{{siconcolor}}}">
                                                                <span class="media-icon">
                                                                    <i class="fa fa-{{sicon}}"></i>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    {{/sicon}}
                                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('sicon');
                $buffer .= $this->sectionBef0df1df7c721df332a8da3bbc11fa9($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionD7b5e9d7b9c2875e784b0acafcd584ea(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                                {{# socialstatus}}
                                                    {{#sicon}}
                                                        <li class="smedia-{{sno}}">
                                                            <a href="{{{surl}}}" target="_blank" style="background-color: {{{siconcolor}}}">
                                                                <span class="media-icon">
                                                                    <i class="fa fa-{{sicon}}"></i>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    {{/sicon}}
                                                {{/ socialstatus}}
                                            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('socialstatus');
                $buffer .= $this->sectionA1628dd71d081665280e22151c726b43($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionEa6f83397b8614b14059a076ef265e4c(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                    <div class="{{colclass}}">
                                        <div class="social-media">
                                            {{#ftitle4}}
                                                <h2>{{ftitle4}}</h2>
                                            {{/ftitle4}}
                                            <ul>
                                            {{#socialmedia}}
                                                {{# socialstatus}}
                                                    {{#sicon}}
                                                        <li class="smedia-{{sno}}">
                                                            <a href="{{{surl}}}" target="_blank" style="background-color: {{{siconcolor}}}">
                                                                <span class="media-icon">
                                                                    <i class="fa fa-{{sicon}}"></i>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    {{/sicon}}
                                                {{/ socialstatus}}
                                            {{/socialmedia}}
                                            </ul>
                                        </div>
                                    </div>
                                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                    <div class="';
                $value = $this->resolveValue($context->find('colclass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '">
';
                $buffer .= $indent . '                                        <div class="social-media">
';
                $value = $context->find('ftitle4');
                $buffer .= $this->section130076ad46f12e640c65cf22c1aea1f4($context, $indent, $value);
                $buffer .= $indent . '                                            <ul>
';
                $value = $context->find('socialmedia');
                $buffer .= $this->sectionD7b5e9d7b9c2875e784b0acafcd584ea($context, $indent, $value);
                $buffer .= $indent . '                                            </ul>
';
                $buffer .= $indent . '                                        </div>
';
                $buffer .= $indent . '                                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionA257e668ab477e4d980d9b01f717181e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                <div class="footer-main">
                    <div class="container-fluid">
                        <div id="course-footer">
                            {{{ output.course_footer }}}
                        </div>
                        <div class="row">
                            {{! Footer block 1 start }}
                                {{#fstatus1}}
                                    <div class="{{colclass}}">
                                        <div class="infoarea">
                                            {{#ftitle1}}
                                                <h2>{{ftitle1}}</h2>
                                            {{/ftitle1}}
                                            {{#footlogostatus}}
                                                {{#footerlogourl}}
                                                    <div class="footer-logo">
                                                        <h2 class="site-name">Infinity Learn Academy</h2>
                                                    </div>
                                                {{/footerlogourl}}
                                            {{/footlogostatus}}
                                            {{#footnote}}
                                                {{{footnote}}}
                                            {{/footnote}}
                                        </div>
                                    </div>
                                {{/fstatus1}}
                            {{! Footer block 1 end }}

                            {{! Footer block 2 start }}
                                {{#fstatus2}}
                                    <div class="{{colclass}} footer-links-block">
                                        <div class="foot-links">
                                            {{#ftitle2}}
                                                <h2>{{ftitle2}}</h2>
                                            {{/ftitle2}}
                                            {{# infolink}}
                                                <ul>
                                                    {{{infolink}}}
                                                </ul>
                                            {{/ infolink}}
                                        </div>
                                    </div>
                                {{/fstatus2}}
                            {{! Footer block 2 end }}

                            {{! Footer block 3 start }}
                                {{#fstatus3}}
                                    <div class="{{colclass}}">
                                        <div class="contact-info">
                                            {{#ftitle3}}
                                                <h2>{{ftitle3}}</h2>
                                            {{/ftitle3}}
                                            <p>C-27A, Dayal Bagh, Faridabad, Haryana, India</P>
                                            <p>Phone : 9871585013</p>
                                            <p>Emial : infowebservices2024@gmail.com
                                        </div>
                                    </div>
                                {{/fstatus3}}
                            {{! Footer block 3 end }}

                            {{! Footer block 4 start }}
                                {{#fstatus4}}
                                    <div class="{{colclass}}">
                                        <div class="social-media">
                                            {{#ftitle4}}
                                                <h2>{{ftitle4}}</h2>
                                            {{/ftitle4}}
                                            <ul>
                                            {{#socialmedia}}
                                                {{# socialstatus}}
                                                    {{#sicon}}
                                                        <li class="smedia-{{sno}}">
                                                            <a href="{{{surl}}}" target="_blank" style="background-color: {{{siconcolor}}}">
                                                                <span class="media-icon">
                                                                    <i class="fa fa-{{sicon}}"></i>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    {{/sicon}}
                                                {{/ socialstatus}}
                                            {{/socialmedia}}
                                            </ul>
                                        </div>
                                    </div>
                                {{/fstatus4}}
                            {{! Footer block 4 end }}
                        </div>
                    </div>
                </div>
            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                <div class="footer-main">
';
                $buffer .= $indent . '                    <div class="container-fluid">
';
                $buffer .= $indent . '                        <div id="course-footer">
';
                $buffer .= $indent . '                            ';
                $value = $this->resolveValue($context->findDot('output.course_footer'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '
';
                $buffer .= $indent . '                        </div>
';
                $buffer .= $indent . '                        <div class="row">
';
                $value = $context->find('fstatus1');
                $buffer .= $this->sectionF7d6c064ba0221c7296b0cf43e74c04b($context, $indent, $value);
                $buffer .= $indent . '
';
                $value = $context->find('fstatus2');
                $buffer .= $this->sectionDbda50c93750eb40a8512d8085218d72($context, $indent, $value);
                $buffer .= $indent . '
';
                $value = $context->find('fstatus3');
                $buffer .= $this->section737ee21e1f8c72d24c3e69f82acc5b9b($context, $indent, $value);
                $buffer .= $indent . '
';
                $value = $context->find('fstatus4');
                $buffer .= $this->sectionEa6f83397b8614b14059a076ef265e4c($context, $indent, $value);
                $buffer .= $indent . '                        </div>
';
                $buffer .= $indent . '                    </div>
';
                $buffer .= $indent . '                </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section276899c39b8038794b9b2ee99990cc6b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                <div class="footer-bottom">
                        <p>@2025 Developed by Infinity Learn Academy.com. Powered by Moodle</p>
                    {{! Moodle footer debug footer }}
                    <div class="footer-content-debugging">
                        <div class="container">{{{ output.debug_footer_html }}}</div>
                    </div>
                </div>
            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                <div class="footer-bottom">
';
                $buffer .= $indent . '                        <p>@2025 Developed by Infinity Learn Academy.com. Powered by Moodle</p>
';
                $buffer .= $indent . '                    <div class="footer-content-debugging">
';
                $buffer .= $indent . '                        <div class="container">';
                $value = $this->resolveValue($context->findDot('output.debug_footer_html'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $buffer .= $indent . '                    </div>
';
                $buffer .= $indent . '                </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section01c32b600d68c4d5f6fb463bea0a43a3(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'communicationroomlink, course';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'communicationroomlink, course';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section860fe5efd27e2c99776d92b09bfc4939(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 't/messages-o, core';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 't/messages-o, core';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionFb6792e2b3850088104a7eb1c247f8c2(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <button onclick="window.open(\'{{output.communication_url}}\', \'_blank\', \'noreferrer\')" class="btn btn-icon bg-primary text-white icon-no-margin btn-footer-communication" aria-label="{{#str}}communicationroomlink, course{{/str}}">
                        {{#pix}}t/messages-o, core{{/pix}}
                    </button>
                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <button onclick="window.open(\'';
                $value = $this->resolveValue($context->findDot('output.communication_url'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '\', \'_blank\', \'noreferrer\')" class="btn btn-icon bg-primary text-white icon-no-margin btn-footer-communication" aria-label="';
                $value = $context->find('str');
                $buffer .= $this->section01c32b600d68c4d5f6fb463bea0a43a3($context, $indent, $value);
                $buffer .= '">
';
                $buffer .= $indent . '                        ';
                $value = $context->find('pix');
                $buffer .= $this->section860fe5efd27e2c99776d92b09bfc4939($context, $indent, $value);
                $buffer .= '
';
                $buffer .= $indent . '                    </button>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section5a5198f26dc6ad191d1a18c314235d65(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'showfooter, theme_boost';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'showfooter, theme_boost';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section46f926dcc61094038ebb3542556c1993(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'e/question, core';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'e/question, core';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section03d8b0ec17fd9fb16b53e1cb3cbeed65(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <div class="footer-section p-3 border-bottom footer-link-communication">
                        <div class="footer-support-link">{{{ output.communication_link }}}</div>
                    </div>
                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <div class="footer-section p-3 border-bottom footer-link-communication">
';
                $buffer .= $indent . '                        <div class="footer-support-link">';
                $value = $this->resolveValue($context->findDot('output.communication_link'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $buffer .= $indent . '                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section994a7e63e8d45c443e88ccc05258dcbd(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                            <div>{{{ output.page_doc_link }}}</div>
                        ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                            <div>';
                $value = $this->resolveValue($context->findDot('output.page_doc_link'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionFff03307595ff5a26ada0867d0a8a2c4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                            <div>{{{ output.services_support_link }}}</div>
                        ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                            <div>';
                $value = $this->resolveValue($context->findDot('output.services_support_link'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section711860ca1e1e62ec4a4bd2d18268bf6c(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                            <div>{{{ output.supportemail }}}</div>
                        ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                            <div>';
                $value = $this->resolveValue($context->findDot('output.supportemail'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionA77d76f233a7692a380a3b52797f8a44(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <div class="footer-section p-3 border-bottom">
                        {{# output.page_doc_link }}
                            <div>{{{ output.page_doc_link }}}</div>
                        {{/ output.page_doc_link }}

                        {{# output.services_support_link }}
                            <div>{{{ output.services_support_link }}}</div>
                        {{/ output.services_support_link }}

                        {{# output.supportemail }}
                            <div>{{{ output.supportemail }}}</div>
                        {{/ output.supportemail }}
                    </div>
                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <div class="footer-section p-3 border-bottom">
';
                $value = $context->findDot('output.page_doc_link');
                $buffer .= $this->section994a7e63e8d45c443e88ccc05258dcbd($context, $indent, $value);
                $buffer .= $indent . '
';
                $value = $context->findDot('output.services_support_link');
                $buffer .= $this->sectionFff03307595ff5a26ada0867d0a8a2c4($context, $indent, $value);
                $buffer .= $indent . '
';
                $value = $context->findDot('output.supportemail');
                $buffer .= $this->section711860ca1e1e62ec4a4bd2d18268bf6c($context, $indent, $value);
                $buffer .= $indent . '                    </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section3cef0c729bd31199c0f96ce94b38f287(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'poweredbymoodle, core';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'poweredbymoodle, core';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionEbadd554e70ec7af082056d50928f237(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'version, core';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'version, core';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF0d717abadb36798f34408dbd372939f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                        <div>{{#str}}version, core{{/str}}{{{ output.moodle_release }}}</div>
                    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                        <div>';
                $value = $context->find('str');
                $buffer .= $this->sectionEbadd554e70ec7af082056d50928f237($context, $indent, $value);
                $value = $this->resolveValue($context->findDot('output.moodle_release'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionEf2aef73b602bcd95c0478d1879810e4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
    <a id="backToTop" href="#" class="btn btn-primary btn-lg back-to-top " role="button"><span class="fa fa-angle-up"></span></a>
';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '    <a id="backToTop" href="#" class="btn btn-primary btn-lg back-to-top " role="button"><span class="fa fa-angle-up"></span></a>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section8397d600017f65f298d8425ee0497b7d(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
M.util.js_pending(\'theme_boost/loader\');
require([\'theme_boost/loader\', \'theme_boost/drawer\'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete(\'theme_boost/loader\');
});
';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . 'M.util.js_pending(\'theme_boost/loader\');
';
                $buffer .= $indent . 'require([\'theme_boost/loader\', \'theme_boost/drawer\'], function(Loader, Drawer) {
';
                $buffer .= $indent . '    Drawer.init();
';
                $buffer .= $indent . '    M.util.js_complete(\'theme_boost/loader\');
';
                $buffer .= $indent . '});
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section44cca7cb7eae6e808ea785e5453e43c0(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
require([\'theme_boost/footer-popover\'], function(FooterPopover) {
    FooterPopover.init();
});
';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . 'require([\'theme_boost/footer-popover\'], function(FooterPopover) {
';
                $buffer .= $indent . '    FooterPopover.init();
';
                $buffer .= $indent . '});
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
