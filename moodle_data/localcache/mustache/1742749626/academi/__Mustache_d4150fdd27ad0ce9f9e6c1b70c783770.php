<?php

class __Mustache_d4150fdd27ad0ce9f9e6c1b70c783770 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $value = $context->find('status');
        $buffer .= $this->sectionDe3f8dfb0a5beab25c61ce24a2a60048($context, $indent, $value);

        return $buffer;
    }

    private function section56f0628a53a78b8028d2b0324829f27f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'blockemptymessage, theme_academi';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'blockemptymessage, theme_academi';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section6b7e7ef469d5fda15584df7b8e5f4e98(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
        <div class="custom-alert-block alert alert-warning">
            {{#str}}blockemptymessage, theme_academi{{/str}}
        </div>
    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '        <div class="custom-alert-block alert alert-warning">
';
                $buffer .= $indent . '            ';
                $value = $context->find('str');
                $buffer .= $this->section56f0628a53a78b8028d2b0324829f27f($context, $indent, $value);
                $buffer .= '
';
                $buffer .= $indent . '        </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB40653e9ea30465a0829820da5912400(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                <a href="#" class="prevBtn carousel-control left"> <span aria-hidden="true"></span> </a>
                <a href="#" class="nextBtn carousel-control right"> <span aria-hidden="true"></span> </a>
            ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                <a href="#" class="prevBtn carousel-control left"> <span aria-hidden="true"></span> </a>
';
                $buffer .= $indent . '                <a href="#" class="nextBtn carousel-control right"> <span aria-hidden="true"></span> </a>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionEe6cf9f04d9195ee7ff6b075eb215808(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                            <img src="';
                $value = $this->resolveValue($context->find('slideimg'), $context);
                $buffer .= ($value === null ? '' : $value);
                $buffer .= '" class="slide-image">
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF7e43d9daca4db8fb7067b39ebfcc012(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                    <div class="slide-text content_overlayer ';
                $value = $this->resolveValue($context->find('contentClass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '" style="width:';
                $value = $this->resolveValue($context->find('contentwidth'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= ';">
';
                $buffer .= $indent . '                                        <div class="heading-content">
';
                $buffer .= $indent . '                                            <p> Infinity Learn Academy is an educational 
';
                $buffer .= $indent . '                                            platform offering expert-led courses, interactive 
';
                $buffer .= $indent . '                                            learning, and personalized mentorship for academic and competitive exam success.</p>
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

    private function section3b1244ee4c8830afa1e2b8f5853cc8d3(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                            <div class="homecarousel-slide-item carousel-item">
                                <div class="slide-item slide-content {{overlayClass}}">
                                    <div class="slide-main-background">
                                        {{#slideimg}}
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        {{/slideimg}}
                                    </div>
                                    {{! Slide content }}
                                    {{#slidecontentstatus}}
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    {{/slidecontentstatus}}
                                </div>
                            </div>
                        ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                            <div class="homecarousel-slide-item carousel-item">
';
                $buffer .= $indent . '                                <div class="slide-item slide-content ';
                $value = $this->resolveValue($context->find('overlayClass'), $context);
                $buffer .= ($value === null ? '' : call_user_func($this->mustache->getEscape(), $value));
                $buffer .= '">
';
                $buffer .= $indent . '                                    <div class="slide-main-background">
';
                $value = $context->find('slideimg');
                $buffer .= $this->sectionEe6cf9f04d9195ee7ff6b075eb215808($context, $indent, $value);
                $buffer .= $indent . '                                    </div>
';
                $value = $context->find('slidecontentstatus');
                $buffer .= $this->sectionF7e43d9daca4db8fb7067b39ebfcc012($context, $indent, $value);
                $buffer .= $indent . '                                </div>
';
                $buffer .= $indent . '                            </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section2fe47476d6b4f47ecd530567414d271a(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                        {{#slideimg}}
                            <div class="homecarousel-slide-item carousel-item">
                                <div class="slide-item slide-content {{overlayClass}}">
                                    <div class="slide-main-background">
                                        {{#slideimg}}
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        {{/slideimg}}
                                    </div>
                                    {{! Slide content }}
                                    {{#slidecontentstatus}}
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    {{/slidecontentstatus}}
                                </div>
                            </div>
                        {{/slideimg}}
                    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('slideimg');
                $buffer .= $this->section3b1244ee4c8830afa1e2b8f5853cc8d3($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section77ff43d1a5b25a12463db2efd54d3e80(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    {{#slidestatus}}
                        {{#slideimg}}
                            <div class="homecarousel-slide-item carousel-item">
                                <div class="slide-item slide-content {{overlayClass}}">
                                    <div class="slide-main-background">
                                        {{#slideimg}}
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        {{/slideimg}}
                                    </div>
                                    {{! Slide content }}
                                    {{#slidecontentstatus}}
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    {{/slidecontentstatus}}
                                </div>
                            </div>
                        {{/slideimg}}
                    {{/slidestatus}}
                ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('slidestatus');
                $buffer .= $this->section2fe47476d6b4f47ecd530567414d271a($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section47661870f4c7294c0788a421ef84f20c(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
        <div class="homepage-carousel">
            {{#numofslide}}
                <a href="#" class="prevBtn carousel-control left"> <span aria-hidden="true"></span> </a>
                <a href="#" class="nextBtn carousel-control right"> <span aria-hidden="true"></span> </a>
            {{/numofslide}}
            <div id="homepage-carousel">
                {{#slides}}
                    {{#slidestatus}}
                        {{#slideimg}}
                            <div class="homecarousel-slide-item carousel-item">
                                <div class="slide-item slide-content {{overlayClass}}">
                                    <div class="slide-main-background">
                                        {{#slideimg}}
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        {{/slideimg}}
                                    </div>
                                    {{! Slide content }}
                                    {{#slidecontentstatus}}
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    {{/slidecontentstatus}}
                                </div>
                            </div>
                        {{/slideimg}}
                    {{/slidestatus}}
                {{/slides}}
            </div>
        </div>
    ';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '        <div class="homepage-carousel">
';
                $value = $context->find('numofslide');
                $buffer .= $this->sectionB40653e9ea30465a0829820da5912400($context, $indent, $value);
                $buffer .= $indent . '            <div id="homepage-carousel">
';
                $value = $context->find('slides');
                $buffer .= $this->section77ff43d1a5b25a12463db2efd54d3e80($context, $indent, $value);
                $buffer .= $indent . '            </div>
';
                $buffer .= $indent . '        </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionDe3f8dfb0a5beab25c61ce24a2a60048(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
    {{#isblockempty}}
        <div class="custom-alert-block alert alert-warning">
            {{#str}}blockemptymessage, theme_academi{{/str}}
        </div>
    {{/isblockempty}}


    {{#sliderblockstatus}}
        <div class="homepage-carousel">
            {{#numofslide}}
                <a href="#" class="prevBtn carousel-control left"> <span aria-hidden="true"></span> </a>
                <a href="#" class="nextBtn carousel-control right"> <span aria-hidden="true"></span> </a>
            {{/numofslide}}
            <div id="homepage-carousel">
                {{#slides}}
                    {{#slidestatus}}
                        {{#slideimg}}
                            <div class="homecarousel-slide-item carousel-item">
                                <div class="slide-item slide-content {{overlayClass}}">
                                    <div class="slide-main-background">
                                        {{#slideimg}}
                                            <img src="{{{slideimg}}}" class="slide-image">
                                        {{/slideimg}}
                                    </div>
                                    {{! Slide content }}
                                    {{#slidecontentstatus}}
                                    <div class="slide-text content_overlayer {{contentClass}}" style="width:{{contentwidth}};">
                                        <div class="heading-content">
                                            <p> Infinity Learn Academy is an educational 
                                            platform offering expert-led courses, interactive 
                                            learning, and personalized mentorship for academic and competitive exam success.</p>
                                        </div>
                                    </div>
                                    {{/slidecontentstatus}}
                                </div>
                            </div>
                        {{/slideimg}}
                    {{/slidestatus}}
                {{/slides}}
            </div>
        </div>
    {{/sliderblockstatus}}
';
            $result = (string) call_user_func($value, $source, $this->lambdaHelper);
            $buffer .= $result;
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $value = $context->find('isblockempty');
                $buffer .= $this->section6b7e7ef469d5fda15584df7b8e5f4e98($context, $indent, $value);
                $buffer .= $indent . '
';
                $buffer .= $indent . '
';
                $value = $context->find('sliderblockstatus');
                $buffer .= $this->section47661870f4c7294c0788a421ef84f20c($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
