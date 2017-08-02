export let requestCommitComment = {
  'object_kind': 'note',
  'user': {
    'name': 'Administrator',
    'username': 'root',
    'avatar_url':
      'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon'
  },
  'project_id': 5,
  'project': {
    'name': 'Gitlab Test',
    'description': 'Aut reprehenderit ut est.',
    'web_url': 'http://example.com/gitlabhq/gitlab-test',
    'avatar_url': null,
    'git_ssh_url': 'git@example.com:gitlabhq/gitlab-test.git',
    'git_http_url': 'http://example.com/gitlabhq/gitlab-test.git',
    'namespace': 'GitlabHQ',
    'visibility_level': 20,
    'path_with_namespace': 'gitlabhq/gitlab-test',
    'default_branch': 'master',
    'homepage': 'http://example.com/gitlabhq/gitlab-test',
    'url': 'http://example.com/gitlabhq/gitlab-test.git',
    'ssh_url': 'git@example.com:gitlabhq/gitlab-test.git',
    'http_url': 'http://example.com/gitlabhq/gitlab-test.git'
  },
  'repository': {
    'name': 'Gitlab Test',
    'url': 'http://example.com/gitlab-org/gitlab-test.git',
    'description': 'Aut reprehenderit ut est.',
    'homepage': 'http://example.com/gitlab-org/gitlab-test'
  },
  'object_attributes': {
    'id': 1243,
    'note': 'This is a commit comment. How does this work?',
    'noteable_type': 'Commit',
    'author_id': 1,
    'created_at': '2015-05-17 18:08:09 UTC',
    'updated_at': '2015-05-17 18:08:09 UTC',
    'project_id': 5,
    'attachment': null,
    'line_code': 'bec9703f7a456cd2b4ab5fb3220ae016e3e394e3_0_1',
    'commit_id': 'cfe32cf61b73a0d5e9f13e774abde7ff789b1660',
    'noteable_id': null,
    'system': false,
    'st_diff': {
      'diff': '--- /dev/null\n+++ b/six\n@@ -0,0 +1 @@\n'
              + '+Subproject commit 409f37c4f05865e4fb208c771485f211a22c4c2d\n',
      'new_path': 'six',
      'old_path': 'six',
      'a_mode': '0',
      'b_mode': '160000',
      'new_file': true,
      'renamed_file': false,
      'deleted_file': false
    },
    'url': 'http://example.com/gitlab-org/gitlab-test/commit'
          + '/cfe32cf61b73a0d5e9f13e774abde7ff789b1660#note_1243'
  },
  'commit': {
    'id': 'cfe32cf61b73a0d5e9f13e774abde7ff789b1660',
    'message': 'Add submodule\n\nSigned-off-by: Dmitriy'
               + ' Zaporozhets \u003cdmitriy.zaporozhets@gmail.com\u003e\n',
    'timestamp': '2014-02-27T10:06:20+02:00',
    'url':
      'http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660',
    'author': {
      'name': 'Dmitriy Zaporozhets',
      'email': 'dmitriy.zaporozhets@gmail.com'
    }
  }
};

export let requestMergeCommand = {
  'object_kind': 'note',
  'user': {
    'name': 'Administrator',
    'username': 'root',
    'avatar_url':
      'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon'
  },
  'project_id': 5,
  'project': {
    'name': 'Gitlab Test',
    'description': 'Aut reprehenderit ut est.',
    'web_url': 'http://example.com/gitlab-org/gitlab-test',
    'avatar_url': null,
    'git_ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'git_http_url': 'http://example.com/gitlab-org/gitlab-test.git',
    'namespace': 'Gitlab Org',
    'visibility_level': 10,
    'path_with_namespace': 'gitlab-org/gitlab-test',
    'default_branch': 'master',
    'homepage': 'http://example.com/gitlab-org/gitlab-test',
    'url': 'http://example.com/gitlab-org/gitlab-test.git',
    'ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'http_url': 'http://example.com/gitlab-org/gitlab-test.git'
  },
  'repository': {
    'name': 'Gitlab Test',
    'url': 'http://localhost/gitlab-org/gitlab-test.git',
    'description': 'Aut reprehenderit ut est.',
    'homepage': 'http://example.com/gitlab-org/gitlab-test'
  },
  'object_attributes': {
    'id': 1244,
    'note': 'This MR needs work.',
    'noteable_type': 'MergeRequest',
    'author_id': 1,
    'created_at': '2015-05-17 18:21:36 UTC',
    'updated_at': '2015-05-17 18:21:36 UTC',
    'project_id': 5,
    'attachment': null,
    'line_code': null,
    'commit_id': '',
    'noteable_id': 7,
    'system': false,
    'st_diff': null,
    'url': 'http://example.com/gitlab-org/gitlab-test/merge_requests/1#note_1244'
  },
  'merge_request': {
    'id': 7,
    'target_branch': 'markdown',
    'source_branch': 'master',
    'source_project_id': 5,
    'author_id': 8,
    'assignee_id': 28,
    'title': 'Tempora et eos debitis quae laborum et.',
    'created_at': '2015-03-01 20:12:53 UTC',
    'updated_at': '2015-03-21 18:27:27 UTC',
    'milestone_id': 11,
    'state': 'opened',
    'merge_status': 'cannot_be_merged',
    'target_project_id': 5,
    'iid': 1,
    'description': 'Et voluptas corrupti assumenda temporibus. Architecto cum animi eveniet'
                    + ' amet asperiores. Vitae numquam voluptate est natus sit et ad id.',
    'position': 0,
    'locked_at': null,
    'source': {
      'name': 'Gitlab Test',
      'description': 'Aut reprehenderit ut est.',
      'web_url': 'http://example.com/gitlab-org/gitlab-test',
      'avatar_url': null,
      'git_ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
      'git_http_url': 'http://example.com/gitlab-org/gitlab-test.git',
      'namespace': 'Gitlab Org',
      'visibility_level': 10,
      'path_with_namespace': 'gitlab-org/gitlab-test',
      'default_branch': 'master',
      'homepage': 'http://example.com/gitlab-org/gitlab-test',
      'url': 'http://example.com/gitlab-org/gitlab-test.git',
      'ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
      'http_url': 'http://example.com/gitlab-org/gitlab-test.git'
    },
    'target': {
      'name': 'Gitlab Test',
      'description': 'Aut reprehenderit ut est.',
      'web_url': 'http://example.com/gitlab-org/gitlab-test',
      'avatar_url': null,
      'git_ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
      'git_http_url': 'http://example.com/gitlab-org/gitlab-test.git',
      'namespace': 'Gitlab Org',
      'visibility_level': 10,
      'path_with_namespace': 'gitlab-org/gitlab-test',
      'default_branch': 'master',
      'homepage': 'http://example.com/gitlab-org/gitlab-test',
      'url': 'http://example.com/gitlab-org/gitlab-test.git',
      'ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
      'http_url': 'http://example.com/gitlab-org/gitlab-test.git'
    },
    'last_commit': {
      'id': '562e173be03b8ff2efb05345d12df18815438a4b',
      'message': `Merge branch 'another-branch' into 'master'\n\nCheck in this test\n`,
      'timestamp': '2015-04-08T21: 00:25-07:00',
      'url':
        'http://example.com/gitlab-org/gitlab-test/commit/562e173be03b8ff2efb05345d12df18815438a4b',
      'author': {
        'name': 'John Smith',
        'email': 'john@example.com'
      }
    },
    'work_in_progress': false,
    'assignee': {
      'name': 'User1',
      'username': 'user1',
      'avatar_url':
        'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon'
    }
  }
};

export let requestIssueComment = {
  'object_kind': 'note',
  'user': {
    'name': 'Administrator',
    'username': 'root',
    'avatar_url':
      'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon'
  },
  'project_id': 5,
  'project': {
    'name': 'Gitlab Test',
    'description': 'Aut reprehenderit ut est.',
    'web_url': 'http://example.com/gitlab-org/gitlab-test',
    'avatar_url': null,
    'git_ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'git_http_url': 'http://example.com/gitlab-org/gitlab-test.git',
    'namespace': 'Gitlab Org',
    'visibility_level': 10,
    'path_with_namespace': 'gitlab-org/gitlab-test',
    'default_branch': 'master',
    'homepage': 'http://example.com/gitlab-org/gitlab-test',
    'url': 'http://example.com/gitlab-org/gitlab-test.git',
    'ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'http_url': 'http://example.com/gitlab-org/gitlab-test.git'
  },
  'repository': {
    'name': 'diaspora',
    'url': 'git@example.com:mike/diaspora.git',
    'description': '',
    'homepage': 'http://example.com/mike/diaspora'
  },
  'object_attributes': {
    'id': 1241,
    'note': 'Hello world',
    'noteable_type': 'Issue',
    'author_id': 1,
    'created_at': '2015-05-17 17:06:40 UTC',
    'updated_at': '2015-05-17 17:06:40 UTC',
    'project_id': 5,
    'attachment': null,
    'line_code': null,
    'commit_id': '',
    'noteable_id': 92,
    'system': false,
    'st_diff': null,
    'url': 'http://example.com/gitlab-org/gitlab-test/issues/17#note_1241'
  },
  'issue': {
    'id': 92,
    'title': 'test',
    'assignee_ids': [],
    'assignee_id': null,
    'author_id': 1,
    'project_id': 5,
    'created_at': '2015-04-12 14:53:17 UTC',
    'updated_at': '2015-04-26 08:28:42 UTC',
    'position': 0,
    'branch_name': null,
    'description': 'test',
    'milestone_id': null,
    'state': 'closed',
    'iid': 17
  }
};

export let requestCodeSnipetComment = {
  'object_kind': 'note',
  'user': {
    'name': 'Administrator',
    'username': 'root',
    'avatar_url':
      'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon'
  },
  'project_id': 5,
  'project': {
    'name': 'Gitlab Test',
    'description': 'Aut reprehenderit ut est.',
    'web_url': 'http://example.com/gitlab-org/gitlab-test',
    'avatar_url': null,
    'git_ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'git_http_url': 'http://example.com/gitlab-org/gitlab-test.git',
    'namespace': 'Gitlab Org',
    'visibility_level': 10,
    'path_with_namespace': 'gitlab-org/gitlab-test',
    'default_branch': 'master',
    'homepage': 'http://example.com/gitlab-org/gitlab-test',
    'url': 'http://example.com/gitlab-org/gitlab-test.git',
    'ssh_url': 'git@example.com:gitlab-org/gitlab-test.git',
    'http_url': 'http://example.com/gitlab-org/gitlab-test.git'
  },
  'repository': {
    'name': 'Gitlab Test',
    'url': 'http://example.com/gitlab-org/gitlab-test.git',
    'description': 'Aut reprehenderit ut est.',
    'homepage': 'http://example.com/gitlab-org/gitlab-test'
  },
  'object_attributes': {
    'id': 1245,
    'note': `Is this snippet doing what it's supposed to be doing?`,
    'noteable_type': 'Snippet',
    'author_id': 1,
    'created_at': '2015-05-17 18:35:50 UTC',
    'updated_at': '2015-05-17 18:35:50 UTC',
    'project_id': 5,
    'attachment': null,
    'line_code': null,
    'commit_id': '',
    'noteable_id': 53,
    'system': false,
    'st_diff': null,
    'url': 'http://example.com/gitlab-org/gitlab-test/snippets/53#note_1245'
  },
  'snippet': {
    'id': 53,
    'title': 'test',
    'content': `puts 'Hello world'`,
    'author_id': 1,
    'project_id': 5,
    'created_at': '2015-04-09 02:40:38 UTC',
    'updated_at': '2015-04-09 02:40:38 UTC',
    'file_name': 'test.rb',
    'expires_at': null,
    'type': 'ProjectSnippet',
    'visibility_level': 0
  }
};

export let header = {
  'Content-Type': 'application/json',
  'X-Gitlab-Event': 'Note Hook',
  'X-Gitlab-Token': 'thisIsSecret'
};
