// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Invalid syntax .ts file, used by scripts/linters/
 * js_ts_linter_test.py. There is no 'as const' in this file.
 */

export const AdminPageConstants = {
  ADMIN_ROLE_HANDLER_URL: '/adminrolehandler',
  ADMIN_HANDLER_URL: '/adminhandler',
  ADMIN_TOPICS_CSV_DOWNLOAD_HANDLER_URL: '/admintopicscsvdownloadhandler',
  ADMIN_JOB_OUTPUT_URL_TEMPLATE: '/adminjoboutput?job_id=<jobId>',
  ADMIN_TAB_URLS: {
    ACTIVITIES: '#activities',
    JOBS: '#jobs',
    CONFIG: '#config',
    ROLES: '#roles',
    MISC: '#misc'
  },
  PROFILE_URL_TEMPLATE: '/profile/<username>'
};
