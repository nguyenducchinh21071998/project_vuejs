<?php

declare(strict_types=1);

namespace App\Enums;

/**
 * Constant enum.
 */
class DBConstant extends BaseEnum
{
    // Records limit from DB at once in batch
    const BATCH_LIMIT_ROW = 1000;

    const DAY_OF_WEEK_JP = ['日', '月', '火', '水', '木', '金', '土'];

    const DEFAULT_LIMIT_RESPONSE = 10;

    const SORT_ASC = 'ASC';

    const SORT_DESC = 'DESC';

    const DEFAULT_CURRENCY = 'JPY';

    const CHECK_GROUP = [
        //あ　→　means starting with あ or い or う or え or お
        'ア' => 'あ',
        'あ' => 'あ',
        'い' => 'あ',
        'う' => 'あ',
        'え' => 'あ',
        'お' => 'あ',
        //か　→　means starting with か or き or く or け or こ or が or ぎ or ぐ or げ or ご
        'カ' => 'か',
        'か' => 'か',
        'き' => 'か',
        'く' => 'か',
        'け' => 'か',
        'こ' => 'か',
        'が' => 'か',
        'ぎ' => 'か',
        'ぐ' => 'か',
        'ぐ' => 'か',
        'ご' => 'か',
        //さ　→　means starting with さ or し or す or せ or そ or ざ or じ or ず or ぜ or ぞ
        'サ' => 'さ',
        'さ' => 'さ',
        'し' => 'さ',
        'す' => 'さ',
        'せ' => 'さ',
        'そ' => 'さ',
        'ざ' => 'さ',
        'じ' => 'さ',
        'ず' => 'さ',
        'ぜ' => 'さ',
        'ぞ' => 'さ',
        //た　→　means starting with た or ち or つ or て or と or だ or ぢ or づ or で or ど
        'タ' => 'た',
        'た' => 'た',
        'ち' => 'た',
        'つ' => 'た',
        'て' => 'た',
        'と' => 'た',
        'だ' => 'た',
        'ぢ' => 'た',
        'づ' => 'た',
        'で' => 'た',
        'ど' => 'た',
        //な　→　means starting with な or に or ぬ or ね or の
        'ナ' => 'な',
        'な' => 'な',
        'に' => 'な',
        'ぬ' => 'な',
        'ね' => 'な',
        'の' => 'な',
        //は　→　means starting with は or ひ or ふ or へ or ほ or ば or び or ぶ or べ or ぼ
        'ハ' => 'は',
        'は' => 'は',
        'ひ' => 'は',
        'ふ' => 'は',
        'へ' => 'は',
        'ほ' => 'は',
        'ば' => 'は',
        'び' => 'は',
        'ぶ' => 'は',
        'べ' => 'は',
        'ぼ' => 'は',
        //ま　→　means starting with ま or み or む or め or も
        'マ' => 'ま',
        'ま' => 'ま',
        'み' => 'ま',
        'む' => 'ま',
        'め' => 'ま',
        'も' => 'ま',
        //や　→　means starting with や or ゆ or よ
        'や' => 'や',
        'ゆ' => 'や',
        'よ' => 'や',
        //ら　→　means starting with ら or り or る or れ or ろ
        'ラ' => 'ら',
        'ら' => 'ら',
        'り' => 'ら',
        'る' => 'ら',
        'れ' => 'ら',
        'ろ' => 'ら',
        //わ　→　means starting with わ or ゐ or ゑ or を or ん
        'ワ' => 'わ',
        'わ' => 'わ',
        'ゐ' => 'わ',
        'ゑ' => 'わ',
        'を' => 'わ',
        'ん' => 'わ',
        //Latinh
        'A' => 'A',
        'B' => 'B',
        'C' => 'C',
        'D' => 'D',
        'E' => 'E',
        'F' => 'F',
        'G' => 'G',
        'H' => 'H',
        'I' => 'I',
        'J' => 'J',
        'K' => 'K',
        'L' => 'L',
        'M' => 'M',
        'N' => 'N',
        'O' => 'O',
        'P' => 'P',
        'Q' => 'Q',
        'R' => 'R',
        'S' => 'S',
        'T' => 'T',
        'U' => 'U',
        'V' => 'V',
        'W' => 'W',
        'X' => 'X',
        'Y' => 'Y',
        'Z' => 'Z'
    ];

    const GROUP_NAME_SORT = [
        'あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '他'
    ];

    const JAPANESE_LEVEL = [
        1 => "N1",
        2 => "N2",
        3 => "N3",
        4 => "N4",
        5 => "N5"
    ];

    const JOB_LEVEL = [
        1 => "Dev 1",
        2 => "Dev 2",
        3 => "Dev 3",
        4 => "Dev 4",
        5 => "Dev 5"
    ];

    const COMPANY_DEFAULT_VALUE = [
        1 => 0,
        2 => 0,
        3 => 0,
        4 => 0
    ];

    const GENDER = [
        1 => "Nam",
        2 => "Nữ"
    ];

    const WORK_TYPE = [
        1 => "Internship",
        2 => "Part Time",
        3 => "Full Time"
    ];

    const VALIDATION = [
        'unique' => 401,
        'email' => 402,
        'numeric' => 302,
        'required' => 403,
        'date' => 205,
        'after_or_equal' => 208,
        'max' => 209,
        'image_url_max' => 210,
        'image_url_mimes' => 211
    ];

    const RESPONSIBILITY_CUSTOMER = 1;
    const RESPONSIBILITY_FABBI_JAPAN = 2;
    const RESPONSIBILITY_FABBI = 3;

    const CUSTOMER_TYPE_1 = 1;
    const CUSTOMER_TYPE_2 = 2;
    const CUSTOMER_TYPE_3 = 3;

    const CHART_OPTION_COLOR = [
        'F1_out' => '#ccccff',
        'F2_out' => '#336600',
        'D1_out' => '#009999',
        'D2_out' => '#ccff66',
        'D3_out' => '#adad85',
        'HR_out' => '#cc8800',
        'PR_out' => '#ffff80',
        'ACCOUNTING_out' => '#999999',
        'QA_out' => '#336600',
        '11F_out' => '#cc3300',
        'F1' => '#33cc33',
        'F2' => '#6666ff',
        'D1' => '#33cc33',
        'D2' => '#336699',
        'D3' => '#6666ff',
        'HR' => '#9966ff',
        'PR' => '#d98c8c',
        'ACCOUNTING' => '#009999',
        'QA' => '#ccccff',
        '11F' => '#eb99ff',
    ];

    const CHART_OPTION_IN_OUT = [
        'F1_out' => 'F1 Out',
        'F2_out' => 'F2 Out',
        'D1_out' => 'D1 Out',
        'D2_out' => 'D2 Out',
        'D3_out' => 'D3 Out',
        'HR_out' => 'HR Out',
        'PR_out' => 'PR Out',
        'ACCOUNTING_out' => 'Accounting Out',
        'QA_out' => 'QA Out',
        '11F_out' => '11F Out',
        'F1' => 'F1 In',
        'F2' => 'F2 In',
        'D1' => 'D1 In',
        'D2' => 'D2 In',
        'D3' => 'D3 In',
        'HR' => 'HR In',
        'PR' => 'PR In',
        'ACCOUNTING' => 'Accounting In',
        'QA' => 'QA In',
        '11F' => '11F In',
    ];

    const COUNT_MEMBER_EACH_MONTHS = [
        "01" => 0,
        "02" => 0,
        "03" => 0,
        "04" => 0,
        "05" => 0,
        "06" => 0,
        "07" => 0,
        "08" => 0,
        "09" => 0,
        "10" => 0,
        "11" => 0,
        "12" => 0
    ];
}
