import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function index() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const ambilAPI = async () => {
    setLoading(true)
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setLoading(false)

        if (isEmptyObject(json)) {
          setError("Maaf Ada Kendala")
        } else {
          setError(false)
          setPost(json)
        }

      })
  }

  useEffect(() => {
    ambilAPI()
  }, [])

  return (
    <View style={{ margin: 10 }}>
      {error && (
        <Text>{error}</Text>
      )}
      {loading && (
        <ActivityIndicator size="large" color="black" />
      )}
      {posts?.map((post) => {
        return (
          <View key={post.id} style={{ padding: 10, backgroundColor: 'white', marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({})