<div class="heading-content">
                                            {{#caption}}
                                                <h1 data-animation='animated {{contentAnimation}}' class="{{contentAclass}}">{{{caption}}}</h1>
                                            {{/caption}}
                                            <br>
                                            {{#desc}}
                                                <p data-animation='animated {{contentAnimation}}' class="{{contentAclass}}">{{{desc}}}</p>
                                            {{/desc}}
                                            <div class="link-button">
                                                {{#btntxt}}
                                                    <a href="{{{btnlink}}}" target="{{btntarget}}" class='btn btn-primary {{contentAclass}}' data-animation='animated {{contentAnimation}}'>
                                                        {{btntxt}}
                                                    </a>
                                                {{/btntxt}}
                                            </div>
                                        </div>