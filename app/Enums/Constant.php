<?php

declare(strict_types=1);

namespace App\Enums;

/**
 * Constant enum.
 */
class Constant extends BaseEnum
{
    const DEFAULT_LIMIT_RESPONSE = 10;
    const DEFAULT_SORT_COLUMN_RESPONSE = 'id';
    const DEFAULT_SORT_BY_RESPONSE = 'DESC';
    const PATH_AVATAR_EMPLOYEES = 'avatars/';
    const PATH_NO_IMAGE_AVAILABLE = '/images/no-image-available.jpg';
    const TYPE_WORK_TYPE_EMPLOYEE_CONSTANT = 1;
    const EMPLOYEE_ID_LENGTH = 4;
    const INACTIVE_ACCOUNT = 0;
    const ACTIVE_ACCOUNT = 1;
    const DEFAULT_VALUE_CHART = 0;
    const VALUE_OPTION_CHART_ALL = 'All';
    const VALUE_OPTION_CHART_DIVISION = 'Division';
    const VALUE_OPTION_CHART_FOOT = 'Foot';
}
