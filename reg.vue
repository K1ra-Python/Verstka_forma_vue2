<template>
    <div class="wrap" id="#app">
        <div class="forma_main">
            <div class="up_panel">
                <div class="you_are">
                    Вы
                </div>
                <div class="youre_adress">
                    Ваш адрес
                </div>
                <div class="youre_passport">
                    Ваш паспорт
                </div>
            </div>
            <div class="forma">
                <div class="three_buttons">
                    <div class="youre_name">
                        <label for="name">Ваше Имя</label>
                        <input type="text" id="name" name="name" placeholder="Введите ваше имя">
                    </div>
                    <div class="youre_surname">
                        <label for="surname">Ваша Фамилия</label>
                        <input type="text" id="surname" name="surname" placeholder="Введите вашу фамлию">
                    </div>
                    <div class="youre_bigname">
                        <label for="bigname">Ваше отчество</label>
                        <input type="text" id="bigname" name="bigname" placeholder="Введите ваше отчество">
                    </div>
                </div>
                <div class="two_buttons">
                    <div class="youre_birthdate">
                        <label for="date">Введите дату рождения</label>
                        <input type="date" id="date" name="date" placeholder="Ваша дата рождения">
                    </div>
                    <div class="youre_number">
                        <label for="phone">Ваша номер</label>
                        <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона">
                    </div>
                </div>
                <div class="two_select_buttons">
                    <div class="form_label">
                        <span class="form_text">Группа клиентов</span>
                        <div class="multiselect_block">
                            <select id="select-1" class="field_select" name="technology" multiple>
                                <option value="OMC">ОМС</option>
                                <option value="VIP">VIP</option>
                                <option value="Problem">Проблемные</option>
                            </select>
                        </div>
                        <button>Toggle Visibility</button>
                        <span class="error_text"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

export default {
    name: 'App',
    // дополнительные опции
  };
  </script>